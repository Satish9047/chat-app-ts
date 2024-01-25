import { PrismaClient } from "@prisma/client";
import { IRegister } from "../interface/auth";

const prisma = new PrismaClient();

export const getUser = async(email:string)=>{
    const user = prisma.user.findFirst({where: {email: email}});
    return user;
};

export const createUser = async(userInfo:IRegister)=>{
    const user = await prisma.user.create({
        data: {
            user_name: userInfo.username,
            email: userInfo.email,
            contact: userInfo.contact,
            address: userInfo.address,
            password: userInfo.password
        }
    });
    return user;
};