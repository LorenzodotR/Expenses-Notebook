import { Request, Response } from "express";
import { createCard, updateMyCard, getCardById, getAllCards, deleteMyCard } from "./services";

export const create = async (req: Request, res: Response) => {
    try {
        const bank = await createCard(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const updateCard = async (req: Request, res: Response) => {
    try {
        const bank = await updateMyCard(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const bank = await getCardById(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getAll = async (req: Request, res: Response) => {
    try {
        const bank = await getAllCards(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const deleteCardById = async (req: Request, res: Response) => {
    try {
        await deleteMyCard(req.body);
        res.status(201).json("Despesa removida");
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}