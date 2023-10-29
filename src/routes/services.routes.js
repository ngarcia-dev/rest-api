import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createService,
  getServices,
  getService,
  deleteService,
  updateService,
} from "../controllers/services.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createServiceSchema } from "../schemas/service.schema.js";

const router = Router();

router.get("/services", authRequired, getServices);

router.get("/services/:id", authRequired, getService);

router.post(
  "/services",
  validateSchema(createServiceSchema),
  authRequired,
  createService
);

router.delete("/services/:id", authRequired, deleteService);

router.put("/services/:id", authRequired, updateService);

export default router;
