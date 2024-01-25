import { Request, Response } from "express";
import * as refreshServices from "../services/refresh";

export const refreshHandler = async (req:Request, res:Response)=>{
    console.log(req.headers);
    const data = await refreshServices.refreshHandler();
    res.status(200).json(data);
};