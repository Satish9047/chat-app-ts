import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config/config";
import router from "./routers";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());

app.use("/api/v1", router);

app.listen(config.port, ()=>{
    console.log(`server is running in port: http://localhost:${config.port}`);
});