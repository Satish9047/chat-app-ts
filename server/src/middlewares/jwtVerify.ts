import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import config from "../config/config";
import { Request, Response, NextFunction } from "express";

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.cookies, "jwt verify room");
    const accessToken = req.cookies.accessToken;

    try {
        if (!accessToken) {
            console.log("no token");
            return res.status(400).json({ error: "unauthorized user" });
        }
        console.log("hello1");
        const validToken = jwt.verify(accessToken, config.jwtAccessSecret) as JwtPayload;
        if (!validToken) {
            console.log("invalid token just now");
            res.clearCookie("accessToken");
            return res.status(401).json({ error: "invalid token" });
        }
        next();

    } catch (error) {
        if (error instanceof TokenExpiredError) {
            console.log("Token expired");
            res.clearCookie("accessToken");
            return res.status(401).json({ error: "token expired" });
        }
        console.log("error:", error);
        res.status(500).json({ error: "Something when wrong while authorizing" });
    }
};

