import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import connectDB from "@/config/db";

//For env File
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "API Running...",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
