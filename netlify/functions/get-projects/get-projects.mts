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
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);

    // Recupera progetti
    const projects = await Project.find().sort({ createdAt: -1 });

    if (projects.length > 0) {
      return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    await mongoose.disconnect();
  } catch (error) {
    await mongoose.disconnect();
  }
};
