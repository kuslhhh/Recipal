import Mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {userRouter} from "./routes/users.js"
dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);


Mongoose.connect(process.env.MONGO_URL);

app.listen(3001, () => console.log('Server Started!'));