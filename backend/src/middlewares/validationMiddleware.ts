import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError, ZodSchema } from 'zod';

export const validate: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    try {
        if (err instanceof ZodError) {
            res.status(400).json({ error: err });
        }
        // req.body = schema.parse(req.body);
        next();
    } catch (err: any) {
        res.status(400).json({ error: err.errors });
    }
};
