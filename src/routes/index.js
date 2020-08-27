import { Router } from "express";
import userRouter from "./user";
import farmRouter from "./farm";

const router = Router();

router.use("/user", userRouter);
router.use("/farm", farmRouter);

export default router;
