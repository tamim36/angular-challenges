import { Component } from '@angular/core';
import { AnchorButtonDirective } from './anchor-directive/anchor-button.directive';
import { ScrollManagerDirective } from './anchor-directive/scroll-manager.directive';
import { ScrollSectionDirective } from './anchor-directive/scroll-section.directive';
import { NavButtonDirective } from './nav-button.component';

@Component({
  imports: [NavButtonDirective, ScrollSectionDirective, AnchorButtonDirective],
  selector: 'app-home',
  standalone: true,
  hostDirectives: [ScrollManagerDirective],
  template: `
    <button navButton="/foo" class="fixed left-1/2 top-3">Foo Page</button>
    <div scrollSection="top" class="h-screen bg-gray-500">
      Empty
      <button anchorButton="bottom">Scroll Bottom</button>
    </div>
    <div scrollSection="bottom" class="h-screen bg-blue-300">
      I want to scroll each
      <button anchorButton="top">Scroll Top</button>
    </div>
  `,
})
export class HomeComponent {}
