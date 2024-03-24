import { Schema, model } from "mongoose"

export interface Task {
  id:string,
  title: string,
  notes: string,
  priority: string,
  scheduledDate: string,
  completedDate: string
}

export const TaskSchema = new Schema<Task>({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  scheduledDate: {
    type: String,
    required: true
  },
  completedDate: {
    type: String,
    required: false
  }
})

export const TaskModel = model<Task>('task', TaskSchema)
