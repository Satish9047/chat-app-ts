import { Router } from "express";
import authRouter from "./auth";
import refreshRouter from "./refresh";
import userRouter from "./user";
import { jwtVerify } from "../middlewares/jwtVerify";

const router = Router();

router.use("/auth", authRouter);
router.use("/refresh", refreshRouter);
router.use("/user", jwtVerify, userRouter);


export default router;