import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";

//refresh Token controller
export const refreshHandler = async (req: Request, res: Response) => {
    console.log(req.cookies.refreshToken);
    const refreshToken = req.cookies.refreshToken;
    try {

        const verifyToken = jwt.verify(refreshToken, config.jwtRefreshSecret);
        if (!verifyToken) {
            return res.status(401).json({ error: "unauthorized user" });
        }

        const payload = jwt.decode(refreshToken);
        if (payload instanceof Object && "id" in payload) {
            const newAccessToken = jwt.sign({ id: (payload as JwtPayload).id }, config.jwtAccessSecret);

            res.cookie("accessToken", newAccessToken, { httpOnly: true });
            return res.status(200).json({ success: "Token Refreshed" });
        }

    } catch (error) {
        console.log("error", error);
    }
};