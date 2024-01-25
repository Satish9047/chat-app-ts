import {Router} from "express";
import * as authController from "../controllers/auth";
import {validateReqBody} from "../middlewares/validator";
import { RegisterSchema, loginSchema } from "../schema/auth";

const authRouter = Router();

authRouter.post("/login", validateReqBody(loginSchema), authController.loginHandler);
authRouter.post("/register", validateReqBody(RegisterSchema), authController.registerHandler);

export default authRouter;

