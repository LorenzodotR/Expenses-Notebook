import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.expense.create({ data });
};

export const findById = (data: any) => {
    return prisma.expense.findUnique({
        where: {
            id: data.id
        }
    });
};

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