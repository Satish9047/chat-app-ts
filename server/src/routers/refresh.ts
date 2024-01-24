import {Router} from "express";

const refreshRouter = Router();

refreshRouter.get("/", (req, res)=>{
    console.log(req.header);
    return res.status(200).json({msg: "hello from refresh"});
});

export default refreshRouter;