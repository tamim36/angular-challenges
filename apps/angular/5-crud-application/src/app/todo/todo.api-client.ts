import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiClient } from '../core/base.api-client';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoApiClient extends BaseApiClient {
  constructor(http: HttpClient) {
    super(http);
  }

  static readonly GetTodoPath = `/todos`;

  getTodosResponse(): Observable<HttpResponse<Todo[]>> {
    return this.http.get<Todo[]>(this.rootUrl + TodoApiClient.GetTodoPath, {
      observe: 'response',
    });
  }
}
