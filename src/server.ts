import dotenv from 'dotenv';
dotenv.config({path: 'config/config.env'});
import express from 'express';
import { dbConnection } from './config/database.config';
import userRouter from './routes/user.router'
import taskRouter from './routes/task.router'


const app = express();
app.use(express.json());

// Set routes by importing routes from routes folder
// and by using default url ex. api/users
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`)
  dbConnection();
});
