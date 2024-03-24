import { Request, Response} from 'express'
import { sample_task } from '../sample_data'
import { Task, TaskModel } from '../models/task.model'

export const getAllTask = async(req: Request, res: Response): Promise<void> => {
  res.send(sample_task)
}

export const createTask = async(req: Request, res: Response): Promise<void> => {
  const { title, notes, priority, scheduledDate } = req.body;
  if (!title || !notes || !priority || !scheduledDate) {
    res.status(400).send('Fill in all fields')
  }

  const newTask:Task = {
    id: '',
    title,
    notes,
    priority,
    scheduledDate,
    completedDate: ''
  }

  await TaskModel.create(newTask);

  res.status(200).send(newTask);
}
