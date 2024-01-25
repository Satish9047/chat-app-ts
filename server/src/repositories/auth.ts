import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async(username:string)=>{
    const user = await prisma.user.findFirst({where: {user_name: username}});
    return user;
};