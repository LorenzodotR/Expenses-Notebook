import { Request, Response } from "express";
import { createExpense } from "./services";
import { deleteMyExpense, findAll, findById, update } from "./repository";

export const create = async (req: Request, res: Response) => {
    try {
        const expense = await createExpense(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const updateExpense = async (req: Request, res: Response) => {
    try {
        const expense = await update(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const expense = await findById(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getAll = async (req: Request, res: Response) => {
    try {
        const expense = await findAll(req.body);
        res.status(201).json(expense);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const deleteExpenseById = async (req: Request, res: Response) => {
    try {
        res.status(201).json("Despesa removida");
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}