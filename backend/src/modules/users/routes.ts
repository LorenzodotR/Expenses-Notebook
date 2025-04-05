import { Router } from "express";
import { create, deleteProfile, getById, login, update } from "./controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.post('/login', login);

router.use(authMiddleware);

router.get('/profile', getById);
router.delete('/delete', deleteProfile);
router.post('/register', create);
router.put('/updateProfile', update);

export default router;