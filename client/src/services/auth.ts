import req from "../config/config";
import { ILogin, IRegister } from "../interface/auth";

/**
 * sending login request to api
 * 
 * @param userData object{} with user credential
 * @returns {} object with error or success message
 */
export const getLogin = async (userData:ILogin):Promise<object> =>{
    const res = await req.post("/auth/login", userData);
    console.log(res);
    return res;
};

/**
 * sending register request to api
 * 
 * @param userData object{} with user info
 * @returns {} object with error or success message
 */
export const getRegister = async(userData:IRegister):Promise<object>=>{
    const res = await req.post("/auth/register", userData);
    console.log(res);
    return res;
}