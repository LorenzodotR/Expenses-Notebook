import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const createUser = (data: any) => {
    return prisma.user.create({ data });
};

export const getUser = (data: any) => {
    return prisma.user.findUnique({
        where: {
            id: data
        }
    });
};

export const updateUser = (data: any) => {
    return prisma.user.update({
        where: {
            id: data
        },
        data: {
            name: data.name,
            sureName: data.surName,
            email: data.email,
            birthDate: data.birthDate,
            state: data.state,
            street: data.street,
            city: data.city,
            zipCode: data.zipCode,
            country: data.country
        }
    });
};

export const deleteUser = (data: any) => {
    return prisma.user.delete({
        where: {
            id: data
        },
    });
};