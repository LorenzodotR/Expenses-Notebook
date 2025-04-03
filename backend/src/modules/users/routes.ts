import { Router } from "express";
import { createUser, deleteUser, getUser, login, logout, updateUser } from "./controller";
import { validate } from "../../middlewares/validationMiddleware";
import { creatUserSchema } from "./schema";

const router = Router();

router.get('/profile', getUser);
router.post('/delete', deleteUser);
router.post('/register', validate(creatUserSchema), createUser);
router.post('/editaProfile', updateUser);

router.post('/login', login);
router.post('/logout', logout)

export default router;