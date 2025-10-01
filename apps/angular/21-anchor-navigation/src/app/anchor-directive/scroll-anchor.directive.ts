import { Directive, HostListener, inject, input } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[scrollAnchor]',
  standalone: true,
})
export class ScrollAnchorDirective {
  id = input.required<string>({ alias: 'scrollAnchor' });

  manager = inject(ScrollManagerDirective, { skipSelf: true });

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.id());
  }
}
