import { config } from "dotenv";
import express from "express";
import path from "path";

config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = import.meta.dirname;

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/data.json"));
  } catch (error) {
    console.error(`Error in route "/": ${error}`);
    res.status(500).send({ message: "Could not get the data!" });
  }
});

app.get("/funfacts", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/funfacts.html"));
  } catch (error) {
    console.error(`Error in route "/funfacts": ${error}`);
    res.status(500).send({ message: "Could not get the data!" });
  }
});

app.use((req, res) => {
  res.status(404).send({ message: "This route is not defined yet!" });
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
