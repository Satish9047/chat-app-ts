import {Router} from "express";

const authRouter = Router();

authRouter.post("/login", (req, res)=>{
    console.log(req.headers);
    return res.status(200).json({msg: "hello world login"});
});

authRouter.post("/register", (req, res)=>{
    console.log(req.headers);
    return res.status(200).json({msg: "hello world register"});
});

export default authRouter;

