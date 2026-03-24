import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});

app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
