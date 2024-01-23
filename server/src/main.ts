import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, ()=>{
    console.log("server is running in port: http://localhost:8080");
});