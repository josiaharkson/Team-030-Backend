import { Router } from "express";
import { UserController } from "../controller";
import { Auth } from "../middlewares";

const router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.signIn);
router.get("/authenticated", Auth.hasToken, UserController.getUserWithSession);
router.patch("/update", Auth.hasToken, UserController.updateUserDetails);

export default router;
