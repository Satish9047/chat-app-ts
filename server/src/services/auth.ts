import { ILogin, IRegister } from "../interface/auth";

export const loginHandler = async(userInfo:ILogin)=>{
    console.log(userInfo);
    return userInfo;
};

export const registerHandler = async(userInfo:IRegister)=>{
    console.log(userInfo);
    return userInfo;
};