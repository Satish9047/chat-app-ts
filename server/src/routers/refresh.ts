import {Router} from "express";
import * as refreshController from "../controllers/refresh";

const refreshRouter = Router();

// refresh routes
refreshRouter.get("/", refreshController.refreshHandler);

export default refreshRouter;