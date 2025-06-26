import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  deccription: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskServis {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
}
