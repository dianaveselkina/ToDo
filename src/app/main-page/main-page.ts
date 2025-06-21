import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-main-page',
  imports: [Button],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  addTask() {
    console.log('Добавить задачу');
  }
}
