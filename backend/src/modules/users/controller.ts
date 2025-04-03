import { Request, Response } from "express";
import { createUser, getUserById, updateUser, deleteUser, userLogin } from "./service";

export const create = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const user = await getUserById(req.body);
        res.status(200).json(user);
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        res.status(500).json({ error: "Erro ao buscar informações do usuário", details: error.message });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const user = await updateUser(req.body);
        res.status(200).json(user);
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        res.status(500).json({ error: "Erro ao buscar informações do usuário", details: error.message });
    }
}

export const deleteProfile = async (req: Request, res: Response) => {
    try {
        const user = await deleteUser(req.body);
        res.status(200).json('User deleted');
    } catch (error) {

    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email && !password)
            res.status(400).json("Email e Senha Obrigatorios");

        const token = await userLogin({ email, password })
        
        res.status(200).json(token)

    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
}