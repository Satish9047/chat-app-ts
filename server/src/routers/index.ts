import {Router} from "express";
import authRouter from "./auth";
import refreshRouter from "./refresh";
import userRouter from "./user";

const router =  Router();

router.use("/auth", authRouter);
router.use("/refresh", refreshRouter);
router.use("/user", userRouter);


export default router;