import bcrypt from "bcrypt";
import { ILogin, IRegister } from "../interface/auth";
import * as authRepo from "../repositories/auth";

const saltRounds = 10;

export const loginHandler = async (userInfo: ILogin) => {
    console.log(userInfo);
    const user = await authRepo.getUser(userInfo.email);
    if (user) {
        console.log(user);
    }
    console.log("user not found");

    return userInfo;
};

export const registerHandler = async (userInfo: IRegister) => {
    const user = await authRepo.getUser(userInfo.email);
    if (user) {
        return { error: "user already exist !" };
    }
    try {
        const hashPassword = await bcrypt.hash(userInfo.password, saltRounds);
        userInfo.password = hashPassword;
        const newUser = await authRepo.createUser(userInfo);
        if (!newUser) {
            return {error: "error while registering user"};
        }
        return { msg: "user register successful" };
    } catch (error) {
        console.log(error);
        return {error: "error while registering user"};
    }
};