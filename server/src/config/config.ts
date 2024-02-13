import dotenv from "dotenv";
import { IConfig } from "../interface/config";

dotenv.config();

//app configures
const config: IConfig = {
    port: Number(process.env.PORT),
    saltRounds: Number(process.env.SALTROUNDS || 8),
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET || "defaultAccessSecret",
    jwtRefreshSecret: process.env.JWT_Refresh_SECRET || "defaultRefreshSecret",
    accessExpire: "5sec",
    refreshExpire: "10sec"
};

export default config;