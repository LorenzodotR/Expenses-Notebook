import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.user.create({ data });
};

export const findById = (data: any) => {
    return prisma.user.findUnique({
        where: {
            id: data.id
        }
    });
};

export const update = (data: any) => {
    return prisma.user.update({
        where: {
            id: data.id
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

export const deleteProfile = (data: any) => {
    return prisma.user.delete({
        where: {
            id: data.id
        },
    });
};