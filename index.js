import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const PORT = process.env.PORT || "3001";
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.grawh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

const appStart = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER WORKING'))
  } catch (e) {
    console.log(e);
  }
}

appStart();