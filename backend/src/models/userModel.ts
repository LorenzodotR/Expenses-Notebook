import { z } from 'zod';

export const creatUserSchema = z.object({
    email: z.string().email(),
    birthDate: z.string().datetime(),
    name: z.string(),
    sureName: z.string(),
    password: z.string().min(6),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string(),
    bankId: z.string().uuid(),
})