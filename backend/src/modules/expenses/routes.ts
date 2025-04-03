import { Router } from "express";
import { create, deleteExpenseById, getAll, getById, updateExpense } from "./controller";

const router = Router();

router.post('/add-expense', create);
router.get('/all-expenses', getAll);
router.get('/my-expense', getById);
router.post('/delete', deleteExpenseById);
router.put('/update-expense', updateExpense);


export default router;