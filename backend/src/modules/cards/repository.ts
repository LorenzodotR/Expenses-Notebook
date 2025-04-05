import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = (data: any) => {
    return prisma.card.create({
        data
    })
};

export const findById = (data: any) => {
    return prisma.card.findUnique({
        where: {
            id: data.id
          },
          include: {
            Transactions: true
          }
    });
};

export const findAll = (data: any) => {
    return prisma.card.findMany({
        where: {
            userId: data.id,
        }
    })
}

export const update = (data: any) => {
    return prisma.card.update({
        where: {
            id: data.id
        },
        data: {
            cardName: data.cardName,
            cardType: data.cardType,
            bankId: data.bankId
        }
    })
}

export const deleteCard = (data: any) => {
    return prisma.card.delete({
        where: {
            id: data.id
        }
    })
}