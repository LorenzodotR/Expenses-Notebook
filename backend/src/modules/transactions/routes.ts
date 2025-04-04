import { Router } from "express";
import { create, deleteExpenseById, getAll, getById, updateMyExpense } from "./controller";

const router = Router();

router.post('/add-expense', create);
router.get('/all-expenses', getAll);
router.get('/my-expense', getById);
router.delete('/delete', deleteExpenseById);
router.put('/update-expense', updateMyExpense);


export default router;