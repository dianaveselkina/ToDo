import { Component } from '@angular/core';
import { Task, TaskService } from '../services/task';
import { Router } from '@angular/router';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [Button, CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  title: string = '';
  description: string = '';
  completed: boolean = false;
  showTitleError: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {}

  saveTask(form: NgForm) {
    if (this.title.trim() === '') {
      this.showTitleError = true;
      return;
    } else {
      this.showTitleError = false;
    }
    if (form.valid) {
      if (this.title.trim()) {
        const newTask: Task = {
          title: this.title,
          description: this.description,
          completed: this.completed,
        };
        this.taskService.addTask(newTask);
        this.router.navigate(['/tasks']);
      }
    }
  }

  goToAddTask() {
    this.router.navigate(['/add-task']);
  }
}
