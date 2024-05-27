import express from 'express';
import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Taskatize server is running on port ${PORT}`);
});
