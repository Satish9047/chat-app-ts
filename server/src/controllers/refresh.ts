import { Request, Response } from "express";
import * as refreshServices from "../services/refresh";

//refresh Token controller
export const refreshHandler = async (req:Request, res:Response)=>{
    console.log(req.headers);
    const data = await refreshServices.refreshHandler();
    res.status(200).json(data);
};