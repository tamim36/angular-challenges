import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  numberAttribute,
} from '@angular/core';

type Category = 'Youth' | 'Junior' | 'Open' | 'Senior';
const ageToCategory = (age: number): Category => {
  if (age < 10) return 'Youth';
  else if (age < 18) return 'Junior';
  else if (age < 35) return 'Open';
  return 'Senior';
};

@Component({
  selector: 'app-user',
  imports: [TitleCasePipe],
  template: `
    {{ fullName() | titlecase }} plays tennis in the {{ category }} category!!
  `,
  host: {
    class: 'text-xl text-green-800',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  //name = input.required<string>();
  name = input('');
  lastName = input('');
  age = input(0, { transform: numberAttribute });

  fullName = computed(() => `${this.name()} ${this.lastName()}`);
  category: Category = 'Junior';

  constructor() {
    effect(() => {
      this.category = ageToCategory(this.age());
    });
  }
}
