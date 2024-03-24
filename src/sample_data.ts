import { Task } from "./models/task.model"
import { User } from "./models/user.models"

export const sample_user: User = {
  id: '1',
  name: "Jane Doe",
  email: "jane@gmail.com",
  password: "12345",
}

export const sample_task: Task = {
  id:'1',
  title: 'Clean Bathroom',
  notes: 'need to clean bathroom before 4pm',
  priority: "Medium",
  scheduledDate: new Date().toString(),
  completedDate: new Date().toString(),
  
}
