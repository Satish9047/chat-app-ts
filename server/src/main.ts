import express from "express";
import config from "./config/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(config.port, ()=>{
    console.log(`server is running in port: http://localhost:${config.port}`);
});