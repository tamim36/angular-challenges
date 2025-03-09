import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, input, output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <ng-content select="img"></ng-content>

    <section>
      <ng-container
        *ngFor="let item of list()"
        [ngTemplateOutlet]="rowTemplate()!"
        [ngTemplateOutletContext]="{ $implicit: item }">
        <!-- <ng-template
          [ngTemplateOutlet]="rowTemplate"
          [ngTemplateOutletContext]="{ $implicit: item }"
        ></ng-template> -->
      </ng-container>
    </section>

    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItem()">
      Add
    </button>
  `,
  standalone: true,
  host: {
    class: 'border-2 border-black rounded-md p-4 w-fit flex flex-col gap-3',
  },
  imports: [NgFor, NgTemplateOutlet],
})
export class CardComponent<T> {
  //@Input() list: T[] | null = null;
  add = output();
  list = input<T[] | null>(null);

  // @ContentChild('rowRef', { read: TemplateRef })
  //@Input() rowTemplate!: TemplateRef<{ $implicit: T }>;
  rowTemplate = input.required<TemplateRef<{ $implicit: T }> | undefined>();

  addNewItem() {
    this.add.emit();
  }
}
