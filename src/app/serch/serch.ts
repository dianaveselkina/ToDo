import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-serch',
  imports: [CommonModule, FormsModule],
  templateUrl: './serch.html',
  styleUrl: './serch.css',
})
export class Serch {
  searchText: string = '';

  @Output() searchTextChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchTextChange.emit(this.searchText);
  }
}
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchText)
    );
  }
}
