import { Component } from '@angular/core';
import { HeavyComputationPipe } from '../pipes/heavyComputation.pipe';

@Component({
  selector: 'app-root',
  imports: [HeavyComputationPipe],
  template: `
    @for (person of persons; track person) {
      {{ person | heavyComputation: $index : true }}
    }
  `,
})
export class AppComponent {
  persons = ['toto', 'jack', 'john', 'jane'];
}
