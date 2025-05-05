import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

// Helpers to resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve data.json on "/"
app.get("/", async (req, res) => {
  const data = await readFile(
    path.join(__dirname, "public/data.json"),
    "utf-8"
  );
  res.type("application/json").send(data);
});

// Serve funfacts.html on "/funfacts"
app.get("/funfacts", (req, res) => {
  res.sendFile(path.join(__dirname, "public/funfacts.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running...");
});
