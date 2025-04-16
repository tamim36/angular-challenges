import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  imports: [CommonModule],
  selector: 'app-todo',
  template: `
    <div *ngFor="let todo of todos()">
      {{ todo.title }}
      <button (click)="updateTodo(todo)">Update</button>
      <button (click)="deleteTodo(todo.id)"></button>
    </div>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  protected readonly todoService = inject(TodoService);
  todos = this.todoService.todos;

  ngOnInit(): void {
    this.todoService.getAllTodos();
  }

  updateTodo(todo: Todo): void {
    console.log(todo);
  }

  deleteTodo(id: number): void {
    console.log(id);
  }
}
