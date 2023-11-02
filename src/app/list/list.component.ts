import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items: any[] = [];

  addTask(item:string)
  {
    this.items.push({id:this.items.length,name:item})
    console.warn(this.items);

  }
  removeTask(id:number)
  {
    console.warn(id)
    this.items=this.items.filter(item=>item.id!==id);
  }
}
