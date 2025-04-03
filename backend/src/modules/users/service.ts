import { compare } from "bcryptjs";
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword } from "../../utils/hash";
import { create, findById, update, deleteProfile } from "./repository";

const prisma = new PrismaClient();

export const createUser = async (data: any) => {
    const hashedPassword = await hashPassword(data.password);
    return create({ ...data, password: hashedPassword });
}

export const getUserById = async (data: any) => {
    return findById({ ...data });
}

export const updateUser = async (data: any) => {
    return update({ ...data });
}

export const deleteUser = async (data: any) => {
    return deleteProfile({ ...data });
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
