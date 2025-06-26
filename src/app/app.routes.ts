import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoForm } from './todo-form/todo-form';
import { TaskDetail } from './task-detail/task-detail';

export const routes: Routes = [
  { path: 'tasks', component: TodoList },
  { path: 'add-task', component: TodoForm },
  { path: 'tasks/:id', component: TaskDetail },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
