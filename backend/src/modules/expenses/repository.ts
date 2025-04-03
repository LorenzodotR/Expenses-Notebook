import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.expense.create({
        data: {
            amount: data.amount,
            description: data.description,
            category: data.category,
            expendDate: data.expendDate,
            userId: data.id         
        }
    })
};

export const findById = (data: any) => {
    return prisma.expense.findUnique({
        where: {
            id: data.id
        }
    });
};

export const findAll = (data: any) => {
    return prisma.expense.findMany({
        where: {
            userId: data.id,
        }
    })
}

export const update = (data: any) => {
    return prisma.expense.update({
        where: {
            id: data.id
        },
        data: {
            amount: data.amount,
            description: data.description,
            category: data.category,
            expendDate: data.expendDate
        }
    })
}

export const deleteMyExpense = (data: any) => {
    return prisma.expense.delete({
        where: {
            id: data.id
        }
    })
}