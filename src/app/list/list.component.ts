import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items: TodoItem[] = [];

  addTask(item: string) {
    this.items.push({ id: this.items.length, name: item });
  }
  removeTask(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
