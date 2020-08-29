import { Router } from "express";
import { FarmController } from "../controller";
import { Auth } from "../middlewares";

const router = Router();

router.post("/add", Auth.hasToken, Auth.hasRole("farm"), FarmController.add);
router.get("/get/:id", Auth.hasToken, Auth.hasRole("farm"), FarmController.getFarmByAuthenticatedUser);
router.get("/all", Auth.hasToken, Auth.hasRole("farm"), FarmController.getAllFarmsByAuthenticatedUser);

export default router;
