import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: string;
    email: string;
  }

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: 'Token não autorizado' });

    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET as string) as JwtPayload;
        (req as any).userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}