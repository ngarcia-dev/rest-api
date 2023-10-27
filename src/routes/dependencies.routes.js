import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createDependency,
  getDependencies,
  getDependency,
  deleteDependency,
  updateDependency,
} from "../controllers/dependencies.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDependencySchema } from "../schemas/dependency.schema.js";

const router = Router();

router.get("/dependencies", authRequired, getDependencies);

router.get("/dependencies/:id", authRequired, getDependency);

router.post(
  "/dependencies",
  validateSchema(createDependencySchema),
  authRequired,
  createDependency
);

router.delete("/dependencies/:id", authRequired, deleteDependency);

router.put("/dependencies/:id", authRequired, updateDependency);

export default router;
