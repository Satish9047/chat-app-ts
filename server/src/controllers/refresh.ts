import { Request, Response } from "express";

export const refreshHandler = (req:Request, res:Response)=>{
    console.log(req.headers);
    res.status(200).json({msg: "hello from the refresh"});
};