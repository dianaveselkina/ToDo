import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService, Task } from '../services/task';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../button/button';
import { FilterPipe, Serch } from '../serch/serch';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, Button, RouterModule, Serch, FilterPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  tasks: Task[] = [];
  searchText: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  goToAddTask() {
    this.router.navigate(['/add-task']);
  }
  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.taskService.updateTasks(this.tasks);
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.taskService.updateTasks(this.tasks);
  }
}
