import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";

// Accessing environment variables
config();
const app = express();
const PORT = process.env.PORT || 5000;
const corsOrigin = process.env.CORS_ORIGIN;
const __dirname = import.meta.dirname;

// Middleware to enable CORS
app.use(cors({ origin: corsOrigin }));

// "/" endpoint to serve the data.json file
app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "./public/data.json"));
  } catch (error) {
    console.error(`Error in route "/": ${error}`);
    res.status(500).json({ message: "Failed to get data" });
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "This route is not defined yet" });
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running");
});
