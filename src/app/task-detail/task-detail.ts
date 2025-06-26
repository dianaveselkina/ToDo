import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../services/task';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, Button],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const index = +id;
      const tasks = this.taskService.getTasks();
      this.task = tasks[index];
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
