import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoForm } from './todo-form/todo-form';

export const routes: Routes = [
  { path: 'tasks', component: TodoList },
  { path: 'add-task', component: TodoForm },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
