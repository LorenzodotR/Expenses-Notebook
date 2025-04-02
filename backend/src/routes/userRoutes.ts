import { Router } from "express";
import { createUser, deleteUser, getUser, login, updateUser } from "../controllers/userController";
import { validate } from "../middlewares/validationMiddleware";
import { creatUserSchema } from "../models/userModel";

const router = Router();

router.get('/profile', getUser);
router.post('/delete', deleteUser);
router.post('/register', validate(creatUserSchema), createUser);
router.post('/editaProfile', updateUser);

router.post('/login', login);

export default router;