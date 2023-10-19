import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

/**Basicamente este es el CRUD */
// Obtener
router.get("/tasks", authRequired, getTasks);
// Obtener uno solo
router.get("/tasks/:id", authRequired, getTask);
// Crear
router.post("/tasks", validateSchema(createTaskSchema), authRequired, createTask);
// Eliminar uno solo
router.delete("/tasks/:id", authRequired, deleteTask);
// Actualizar uno solo
router.put("/tasks/:id", authRequired, updateTask);

export default router;
