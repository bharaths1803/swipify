import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
import matchRoutes from "./routes/match.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(
  express.json({
    limit: "2mb",
  })
);
app.use(
  express.urlencoded({
    limit: "2mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/match", matchRoutes);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
