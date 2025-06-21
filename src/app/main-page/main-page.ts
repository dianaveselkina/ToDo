import { Component } from '@angular/core';
import { Button } from '../button/button';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-main-page',
  imports: [Button, TodoList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  addTask() {
    console.log('Добавить задачу');
  }
}
