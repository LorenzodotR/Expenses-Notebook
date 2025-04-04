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
          data: {}
    });
};

export const deleteProfile = (data: any) => {
    return prisma.user.delete({
        where: {
            id: data.id
        },
    });
};