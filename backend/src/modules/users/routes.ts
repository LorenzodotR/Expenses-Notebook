import { Router } from "express";
import { create, deleteProfile, getById, login, update } from "./controller";

const router = Router();

router.get('/profile', getById);
router.delete('/delete', deleteProfile);
router.post('/register', create);
router.put('/updateProfile', update);

router.post('/login', login);

export default router;