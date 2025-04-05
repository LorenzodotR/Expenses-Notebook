import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.bank.create({
        data: {
            ispb: data.ispb,
            balance: data.balance,
            agency: data.agency,
            userId: data.userId
        }
    })
};

export const findById = (data: any) => {
    return prisma.bank.findUnique({
        where: {
            id: data.id
        },
        include: {
            Transactions: true,
            Cards: true,
        }
    });
};

export const findAll = (data: any) => {
    return prisma.bank.findMany({
        where: {
            userId: data.id,
        }
    })
}

export const update = (data: any) => {
    return prisma.bank.update({
        where: {
            id: data.id
        },
        data: {
            balance: data.balance,
        }
    })
}

export const deleteMyBank = (data: any) => {
    return prisma.bank.delete({
        where: {
            id: data.id
        }
    })
}