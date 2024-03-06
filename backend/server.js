import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT;

dotenv.config();

app.use(express.json()); //to parse the incoming request with JSON Payloads(from req.body)
app.use(cookieParser()); //to parse the incoming request with cookie

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("Hey Buddy ready for Chat");
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on  port ${8000}`);
});
