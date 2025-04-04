import { Request, Response } from "express";
import { createExpense, getExpenseById, getAllExpenses, updateExpense, deleteExpense } from "./services";

export const create = async (req: Request, res: Response) => {
    try {
        const expense = await createExpense(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const updateMyExpense = async (req: Request, res: Response) => {
    try {
        const expense = await updateExpense(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const expense = await getExpenseById(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getAll = async (req: Request, res: Response) => {
    try {
        const expense = await getAllExpenses(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const deleteExpenseById = async (req: Request, res: Response) => {
    try {
        await deleteExpense(req.body);
        res.status(201).json("Despesa removida");
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}