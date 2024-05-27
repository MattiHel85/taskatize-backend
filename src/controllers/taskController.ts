import { Request, Response } from 'express';
import { Task } from '../models/task';

let tasks: Task[] = [];

export const createTask = (req: Request, res: Response) => {
    const newTask: Task = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const getTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

export const approveTask = (req: Request, res: Response) => {
    const { taskId } = req.params;
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.approved = true;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
