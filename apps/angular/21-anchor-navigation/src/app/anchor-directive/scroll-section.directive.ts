import { Directive, ElementRef, inject, input } from '@angular/core';

import { OnDestroy, OnInit } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[scrollSection]',
  standalone: true,
})
export class ScrollSectionDirective implements OnInit, OnDestroy {
  id = input.required<string>({ alias: 'scrollSection' });

  manager = inject(ScrollManagerDirective);
  host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this.manager.register(this);
  }

  ngOnDestroy(): void {
    this.manager.unregister(this);
  }

  scroll() {
    this.host.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
