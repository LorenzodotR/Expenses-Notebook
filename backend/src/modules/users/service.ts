import { compare } from "bcryptjs";
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword } from "../../utils/hash";
import { createUser, getUser, updateUser, deleteUser } from "./repository";

const prisma = new PrismaClient();

export const registerUser = async (data: any) => {
    const hashedPassword = await hashPassword(data.password);
    return createUser({ ...data, password: hashedPassword });
}

export const getUserInfo = async (data: any) => {
    return getUser({ ...data });
}

export const updateUserInfo = async (data: any) => {
    return updateUser({ ...data });
}

export const deleteUserProfile = async (data: any) => {
    return deleteUser({ ...data });
}

export const userLogin = async (data: any) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user)
        throw new Error("User not founded");

    const userValid = await compare(data.password, user!.password);
    if (!userValid)
        throw new Error("User not valid");

    const token = jwt.sign(
        { id: user!.id, email: user!.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    )

    return token;
}
