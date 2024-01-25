import { Request, Response } from "express";
import * as authService from "../services/auth";

export const loginHandler = async(req:Request, res:Response)=>{
    const userInfo = req.body;
    const data = await authService.loginHandler(userInfo);
    res.status(200).json(data);
};

export const registerHandler = async(req:Request, res:Response)=>{
    const userInfo = req.body;
    const data = await authService.registerHandler(userInfo);
    res.status(200).json(data);
};