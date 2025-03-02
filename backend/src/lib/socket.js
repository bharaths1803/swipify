import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userSocketMap = {};

export function getUserSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  const { userId } = socket.handshake.query;
  if (userId) {
    userSocketMap[userId] = socket.id;
    io.emit("onlineusers", Object.keys(userSocketMap));
  }

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("onlineusers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
