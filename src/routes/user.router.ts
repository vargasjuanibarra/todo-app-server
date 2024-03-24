import express from 'express'
import { getUser, loginUser, registerUser } from '../controller/user.controller';

const router = express.Router()

router.get('/', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser)

export default router;
