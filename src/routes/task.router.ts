import express from 'express';
import { createTask, getAllTask } from '../controller/task.controller';
const router = express.Router();

router.get('/', getAllTask)
router.post('/', createTask)


export default router;
