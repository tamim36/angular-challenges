import { Directive } from '@angular/core';
import { ScrollSectionDirective } from './scroll-section.directive';

@Directive({
  selector: '[scrollManager]',
  standalone: true,
})
export class ScrollManagerDirective {
  private sections = new Map<string, ScrollSectionDirective>();

  scroll(id: string) {
    if (!this.sections.has(id)) {
      throw new Error(
        `Section with id ${id} not found, it must be implemented with scrollSection directive.`,
      );
    }

    this.sections.get(id)!.scroll();
  }

  register(section: ScrollSectionDirective) {
    console.log('register', section.id(), section);
    this.sections.set(section.id(), section);
  }

  unregister(section: ScrollSectionDirective) {
    this.sections.delete(section.id());
  }
}
