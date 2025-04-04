import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.transactions.create({
        data: {
            value: data.value,
            description: data.description,
            categoryType: data.categoryType,
            transactionType: data.transactionType,
            expendDate: data.expendDate,
            cardId: data.cardId,
            bankId: data.bankId,
            userId: data.id         
        }
    })
};

export const findById = (data: any) => {
    return prisma.transactions.findUnique({
        where: {
            id: data.id
        }
    });
};

export const findAll = (data: any) => {
    return prisma.transactions.findMany({
        where: {
            userId: data.id,
        }
    })
}

export const update = (data: any) => {
    return prisma.transactions.update({
        where: {
            id: data.id
        },
        data: {
            value: data.value,
            description: data.description,
            categoryType: data.categoryType,
            expendDate: data.expendDate
        }
    })
}

export const deleteMyExpense = (data: any) => {
    return prisma.transactions.delete({
        where: {
            id: data.id
        }
    })
}