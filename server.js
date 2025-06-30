import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "https://my-chat-app-v1.netlify.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running.");
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000/")
);
