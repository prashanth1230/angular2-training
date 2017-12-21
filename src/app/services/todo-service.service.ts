import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {

  getUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) { }

  getTodoList() {
    return this.http.get(this.getUrl);
  }

  addNewTodoItem(requestBody) {
    return this.http.post(this.getUrl, requestBody);
  }

}
