
import { AxiosError } from "axios";
import req from "../config/config";
import { ILogin, IRegister } from "../interface/auth";

/**
 * sending login request to api
 * 
 * @param userData object{} with user credential
 * @returns {} object with error or success message
 */
export const getLogin = async (userData: ILogin): Promise<string | object> => {
    // console.log("watch login info", userData);
    try {
        const res = await req.post("/auth/login", userData);
        // console.log(res.data);
        return { data: res.data };
    } catch (error) {
        if ((error instanceof AxiosError)) {
            // console.log("Response data:", error.response?.data.error);
            return { error: error.response?.data.error };
        }
        console.error("No response received from the server.");
        return { error: "No response from the server. Please try again later." };
    }
};

/**
 * sending register request to api
 * 
 * @param userData object{} with user info
 * @returns {} object with error or success message
 */
export const getRegister = async (userData: IRegister): Promise<object> => {
    const res = await req.post("/auth/register", userData);
    console.log(res, "from the service");
    return res;
};