import {Router} from "express";

const router = Router();

router.get("/", (req, res)=>{
    console.log(req.header);
    return res.status(200).json({msg: "hello from the server"});
});

export default router;