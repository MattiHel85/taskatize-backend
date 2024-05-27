import { Request, Response } from 'express';
import { User } from '../models/user';

let users: User[] = [];

export const createUser = (req: Request, res: Response) => {
    const newUser: User = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
};

export const getUsers = (req: Request, res: Response) => {
    res.json(users);
};
