import { Request, Response, NextFunction } from "express";
import {Schema} from "joi";

export function validateReqBody(schema:Schema){
    return (req:Request, res:Response, next:NextFunction)=>{
        const {error, value} = schema.validate(req.body);
        if(error){
            return res.status(400).json({error: `${error.message}`});
        }
        req.body = value;
        next();
    };
}