import { Router } from "express";
import { create, deleteCardById, getAll, getById, updateCard } from "./controller";

const router = Router();

router.post('/add-card', create);
router.get('/all-cards', getAll);
router.get('/my-card', getById);
router.delete('/delete', deleteCardById);
router.put('/update-card', updateCard);


export default router;