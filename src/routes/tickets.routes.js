import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTicket,
  deleteTicket,
  getTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticket.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTicketSchema } from "../schemas/ticket.schema.js";

const router = Router();

/**Basicamente este es el CRUD */
// Obtener
router.get("/tickets", authRequired, getTickets);
// Obtener uno solo
router.get("/tickets/:id", authRequired, getTicket);
// Crear
router.post(
  "/tickets",
  validateSchema(createTicketSchema),
  authRequired,
  createTicket
);
// Eliminar uno solo
router.delete("/tickets/:id", authRequired, deleteTicket);
// Actualizar uno solo
router.put("/tickets/:id", authRequired, updateTicket);

export default router;
