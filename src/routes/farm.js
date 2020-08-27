import { Router } from "express";
import { FarmController } from "../controller";
import { Auth } from "../middlewares";

const router = Router();

router.post("/add", Auth.hasToken, Auth.hasRole("farm"), FarmController.add);

export default router;
