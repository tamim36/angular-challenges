import { Directive } from '@angular/core';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[anchorButton]',
  standalone: true,
  hostDirectives: [
    {
      directive: ScrollManagerDirective,
    },
    {
      directive: ScrollAnchorDirective,
      inputs: ['scrollAnchor:anchorButton'],
    },
  ],
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
})
export class AnchorButtonDirective {}
