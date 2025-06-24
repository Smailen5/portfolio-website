import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Schema del progetto
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String }],
  githubUrl: { type: String, required: true },
  liveUrl: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

async function testConnection() {
  try {
    console.log("🔌 Connessione al DB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connessione DB OK");

    // Lista collections
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(
      "📁 Collections:",
      collections.map((c) => c.name),
    );

    // Recupera progetti
    console.log("📋 Recupero progetti...");
    const projects = await Project.find().sort({ createdAt: -1 });
    console.log(`✅ Trovati ${projects.length} progetti`);

    if (projects.length > 0) {
      console.log("📄 Primo progetto:", {
        id: projects[0]._id,
        name: projects[0].name,
        technologies: projects[0].technologies,
      });
    }

    await mongoose.disconnect();
    console.log("🔌 Disconnesso dal DB");
  } catch (error) {
    console.error("❌ Errore:", error.message);
    await mongoose.disconnect();
  }
}

testConnection();
