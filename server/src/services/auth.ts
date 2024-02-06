import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ILogin, IRegister } from "../interface/auth";
import * as authRepo from "../repositories/auth";
import config from "../config/config";

//configures
const saltRounds = config.saltRounds;
const jwtAccessSecret = config.jwtAccessSecret;
const jwtRefreshSecret = config.jwtRefreshSecret;
const accessExpire = config.accessExpire;
const refreshExpire = config.refreshExpire;

//login handler
export const loginHandler = async (userInfo: ILogin) => {

    try {
        const user = await authRepo.getUser(userInfo.email);
        if (!user) return { error: "invalid user" };

        const passwordMatch = await bcrypt.compare(userInfo.password, user.password);
        if (!passwordMatch) return { error: "incorrect password" };

        const accessToken = jwt.sign({ id: user.user_id }, jwtAccessSecret, { expiresIn: accessExpire });
        const refreshToken = jwt.sign({ id: user.user_id }, jwtRefreshSecret, { expiresIn: refreshExpire });

        return { msg: "login successfull", accessToken: accessToken, refreshToken: refreshToken };

    } catch (error) {
        console.log(error);
        return { error: "error while login" };
    }
};


//register handler
export const registerHandler = async (userInfo: IRegister) => {

    try {
        const user = await authRepo.getUser(userInfo.email);
        if (user) return { error: "user already exist !" };

        const userWithEmail = await authRepo.getUserByContact(userInfo.contact);
        if (userWithEmail) {
            return { error: "User with this email already exists!" };
        }

        const hashPassword = await bcrypt.hash(userInfo.password, saltRounds);
        userInfo.password = hashPassword;

        const newUser = await authRepo.createUser(userInfo);
        if (!newUser) return { error: "error while registering user" };

        return { msg: "user register successful" };

    } catch (error) {
        console.log(error);
        return { error: "error while registering user" };
    }
};