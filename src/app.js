import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import ticketsRoutes from "./routes/tickets.routes.js";
import dependenciesRoutes from "./routes/dependencies.routes.js";

const app = express();

const whitlist = ["http://localhost:5173", "http://192.168.1.35:5173"];

app.use(
  cors({
    origin: whitlist,
    credentials: true,
  })
);

app.use(morgan("dev"));
// para que express pueda convertir los request body en formato json o en un objeto de JS
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", ticketsRoutes);
app.use("/api", dependenciesRoutes);

export default app;
