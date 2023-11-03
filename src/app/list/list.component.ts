import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem(newItem: string): void {
    this.items.push(newItem);
  }
}
