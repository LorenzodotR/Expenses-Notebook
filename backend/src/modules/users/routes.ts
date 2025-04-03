import { Router } from "express";
import { create, deleteProfile, getById, login, update } from "./controller";
import { validate } from "../../middlewares/validationMiddleware";
import { creatUserSchema } from "./schema";

const router = Router();

router.get('/profile', getById);
router.post('/delete', deleteProfile);
router.post('/register', validate(creatUserSchema), create);
router.post('/editaProfile', update);

router.post('/login', login);

export default router;