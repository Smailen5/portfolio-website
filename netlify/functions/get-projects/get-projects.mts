import { Context } from "@netlify/functions";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// Schema del progetto
const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String }],
  readme: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

export default async (request: Request, context: Context) => {
  // Headers CORS
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  };

  // Gestione preflight CORS
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  try {
    console.log("=== FUNCTION START ===");
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 3000, // 3 secondi invece di 5
      socketTimeoutMS: 8000, // 8 secondi invece di 45
      connectTimeoutMS: 3000, // 3 secondi per connessione
    });
    console.log("Connected to MongoDB successfully");

    // Recupera progetti
    console.log("Fetching projects...");
    const projects = await Project.find().sort({ createdAt: -1 });
    console.log("Found projects:", projects.length);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");

    if (projects.length > 0) {
      return new Response(JSON.stringify(projects), {
        status: 200,
        headers,
      });
    } else {
      return new Response(JSON.stringify({ message: "No projects found" }), {
        status: 404,
        headers,
      });
    }
  } catch (error) {
    console.error("=== ERROR DETAILS ===");
    console.error("Error type:", error?.constructor?.name);
    console.error("Error message:", error?.message);

    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB after error");
    } catch (disconnectError) {
      console.error("Error disconnecting:", disconnectError);
    }

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
        type: error?.constructor?.name || "Unknown",
      }),
      {
        status: 500,
        headers,
      },
    );
  }
};
