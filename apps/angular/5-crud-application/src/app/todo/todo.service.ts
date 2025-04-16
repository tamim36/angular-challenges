import { inject, Injectable, signal } from '@angular/core';
import { TodoApiClient } from './todo.api-client';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  readonly todoApiClient = inject(TodoApiClient);
  //readonly cdr = inject(ChangeDetectorRef);

  readonly #todos = signal<Todo[]>([]);
  readonly todos = this.#todos.asReadonly();

  getAllTodos(): void {
    this.todoApiClient.getTodosResponse().subscribe({
      next: (response) => {
        this.#todos.set(response.body || []);
      },
      error: (err) => {
        console.error('Failed to load todos: ', err);
      },
    });
  }
}
