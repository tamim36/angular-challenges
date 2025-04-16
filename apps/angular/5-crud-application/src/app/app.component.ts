import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  imports: [TodoComponent],
  selector: 'app-root',
  template: `
    <app-todo />
  `,
  styles: [],
})
export class AppComponent {}
