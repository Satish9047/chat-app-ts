import { Request, Response } from "express";
import * as authService from "../services/auth";



export const loginHandler = async (req: Request, res: Response) => {
    try {
        const userInfo = req.body;
        const data = await authService.loginHandler(userInfo);
        if("error" in data) return res.status(400).json(data);

        res.cookie("accessToken", data.accessToken, {httpOnly: true});
        res.cookie("refreshToken", data.refreshToken, {httpOnly: true});
        res.status(200).json(data.msg);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "error while login"});
    }

};

export const registerHandler = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const data = await authService.registerHandler(userInfo);
    res.status(200).json(data);
};