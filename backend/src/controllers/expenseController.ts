import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addExpense = async (req: Request, res: Response): Promise<void> => {
    try {
        const { amount, description, category, categoryId, createdAt } = req.body;

        // Validação básica
        if (!amount || !description) {
            res.status(400).json({ error: "Amount and description are required." });
            return;
        }

        // Criar a despesa no banco de dados
        const newExpense = await prisma.expense.create({
            data: {
                amount,
                description,
                category,
                categoryId,
                createdAt
            },
        });

        res.status(201).json(newExpense);
    } catch (error) {
        console.error("Error adding expense:", error);
        res.status(500).json({ error: "An error occurred while adding the expense." });
    }
};