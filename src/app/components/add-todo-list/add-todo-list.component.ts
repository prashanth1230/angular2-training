import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service.service'

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  private label: string;
  private priority: number;
  private done = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addNewItem() {
    this.todoService.addNewTodoItem({ label: this.label, priority: this.priority, done: this.done })
      .subscribe(res => console.log('Added new entry'));
  }

}
