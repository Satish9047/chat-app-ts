import { Request, Response } from "express";

export const loginHandler = (req:Request, res:Response)=>{
    console.log(req.header);
    res.status(200).json({msg: "hello from the controller"});
};

export const registerHandler = (req:Request, res:Response)=>{
    console.log(req.header);
    res.status(200).json({msg: "hello from the controller"});
};