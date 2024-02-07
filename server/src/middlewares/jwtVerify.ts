import jwt from "jsonwebtoken";
import config from "../config/config";
import { Request, Response, NextFunction } from "express";

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.cookies, "jwt verify room");
    const accessToken = req.cookies.accessToken;

    try {
        if (!accessToken) {
            return res.status(400).json({ error: "invalid user" });
        }

        const validToken = jwt.verify(accessToken, config.jwtAccessSecret);
        if (!validToken) {
            res.clearCookie("accessToken");
            return res.status(401).json({ error: "invalid token" });
        }
        next();

    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ erro: "Something when wrong while authorizing" });
    }
};

