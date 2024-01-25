import {Router} from "express";
import * as authController from "../controllers/auth";

const authRouter = Router();

authRouter.post("/login", authController.loginHandler);
authRouter.post("/register", authController.registerHandler);

export default authRouter;

