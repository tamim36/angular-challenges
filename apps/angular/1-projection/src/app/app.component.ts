import { Component } from '@angular/core';
import { TeacherCardComponent } from './component/teacher-card/teacher-card.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid grid-cols-3 gap-3">
      <app-teacher-card />
    </div>
  `,
  imports: [TeacherCardComponent],
})
export class AppComponent {}
