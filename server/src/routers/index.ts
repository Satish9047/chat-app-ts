import {Router} from "express";
import authRouter from "./auth";
import refreshRouter from "./refresh";

const router =  Router();

router.use("/auth", authRouter);
router.use("/refresh", refreshRouter);


export default router;