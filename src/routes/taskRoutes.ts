import { Router } from 'express';
import { createTask, getTasks, approveTask } from '../controllers/taskController';

const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.patch('/:taskId/approve', approveTask);

export default router;
