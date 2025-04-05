import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

export const authMiddleware: RequestHandler = (req: any, res: any, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token ausente' });
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Formato de token inválido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as AuthenticatedRequest).user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};
