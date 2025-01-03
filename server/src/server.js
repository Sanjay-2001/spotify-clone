import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import {
  adminRoutes,
  albumRoutes,
  authRoutes,
  songRoutes,
  statsRoutes,
  userRoutes,
} from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:5000/");
  connectDB();
});
