import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createService } from "../controllers/services.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createServiceSchema } from "../schemas/service.schema.js";

const router = Router();

router.post(
  "/services",
  validateSchema(createServiceSchema),
  authRequired,
  createService
);

export default router;
