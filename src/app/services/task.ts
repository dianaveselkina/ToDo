import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  updateTasks(tasks: Task[]) {
    this.tasks = [...tasks];
  }
}
