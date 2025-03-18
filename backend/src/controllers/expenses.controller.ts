import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient()

export const getExpense = async (req: Request, res: Response) => {
}

export const addExpense = async (req: Request, res: Response) => {
}

export const deleteExpense = async (req: Request, res: Response) => {
}

export const getAllExpenses = async (req: Request, res: Response) => {
}