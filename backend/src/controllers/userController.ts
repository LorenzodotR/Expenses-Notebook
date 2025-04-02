import { Request, Response } from "express";
import { registerUser } from "../services/userService"

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        console.log(user);
        res.status(201).json(user);
    } catch (error: any) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const recoverUserPassword = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

export const userLogout = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}
