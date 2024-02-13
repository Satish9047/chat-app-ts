import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    console.log(req.headers);
    res.status(200).json({ msg: "hello world from user" });
});

export default userRouter;