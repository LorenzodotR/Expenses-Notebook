import { Request, Response } from "express";
import { createBank, deleteBank, getAllBanks, getBankById, updateBank } from "./services";

export const create = async (req: Request, res: Response) => {
    try {
        const bank = await createBank(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const updatebank = async (req: Request, res: Response) => {
    try {
        const bank = await updateBank(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const bank = await getBankById(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const getAll = async (req: Request, res: Response) => {
    try {
        const bank = await getAllBanks(req.body);
        res.status(201).json(bank);
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}
export const deleteBankById = async (req: Request, res: Response) => {
    try {
        await deleteBank(req.body);
        res.status(201).json("Despesa removida");
    } catch (error: any) {
        res.status(500).json({ error: "Erro", details: error.message });
    }
}