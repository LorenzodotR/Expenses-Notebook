import { Router } from "express";
import { create, deleteBankById, getAll, getById, updatebank } from "./controller";

const router = Router();

router.post('/add-bank', create);
router.get('/all-banks', getAll);
router.get('/my-bank', getById);
router.post('/delete', deleteBankById);
router.put('/update-bank', updatebank);


export default router;