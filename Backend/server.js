import express from "express";
import cors from "cors";
import path from "path";
import { ENV_VARS } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import movieRouter from "./routes/movie.js";
import tvRouter from "./routes/tv.js";
import { protectedRoute } from "./Middlewares/protectedRoute.js";
import searchRouter from "./routes/searchRoute.js";

const app = express();
const PORT = 8000; // Use 8000 as default development port
const __dirname = path.resolve();

// Middleware setup
app.use(cors({ 
    origin: 'http://localhost:3000', // Adjust this if your frontend runs on another port
    credentials: true // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movie", protectedRoute, movieRouter);
app.use("/api/v1/tv", protectedRoute, tvRouter);
app.use("/api/v1/search", protectedRoute, searchRouter);


if (ENV_VARS.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB();
});
