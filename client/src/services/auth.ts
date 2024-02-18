
import { AxiosError } from "axios";
import req from "../config/config";
import { ILogin, IRegister } from "../interface/auth";


export const getUserInfo = async () => {
    try {
        const res = await req.get("/user");
        console.log(res, "check me out");
        return { data: res.data };
    } catch (error) {
        console.log(error, "check this error");
        if ((error instanceof AxiosError)) {
            return { error: error.response?.data.error };
        }

        // console.error("No response received from the server.");
        return { error: "No response from the server. Please try again later." };
    }
};


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


export const getRegister = async (userData: IRegister): Promise<object> => {

    try {
        const res = await req.post("/auth/register", userData);
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