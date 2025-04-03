import { Request, Response } from "express";
import { registerUser, getUserInfo, updateUserInfo, deleteUserProfile, userLogin } from "./service";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await getUserInfo(req.body);
        res.status(200).json(user);
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        res.status(500).json({ error: "Erro ao buscar informações do usuário", details: error.message });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await updateUserInfo(req.body);
        res.status(200).json(user);
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        res.status(500).json({ error: "Erro ao buscar informações do usuário", details: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await deleteUserProfile(req.body);
        res.status(200).json(user);
    } catch (error) {

    }
}

export const recoverUserPassword = async (req: Request, res: Response) => {
    try {

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

export const logout = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
}