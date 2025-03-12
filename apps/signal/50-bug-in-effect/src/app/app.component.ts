import {
  ChangeDetectionStrategy,
  Component,
  effect,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  template: `
    <section class="flex gap-5">
      <p>MacBook</p>
      <p>1999,99 €</p>
    </section>

    <section>
      <p>Extras:</p>

      <div>
        <input type="checkbox" [(ngModel)]="drive" />
        +500 GB drive-space
      </div>
      <div>
        <input type="checkbox" [(ngModel)]="ram" />
        +4 GB RAM
      </div>
      <div>
        <input type="checkbox" [(ngModel)]="gpu" />
        Better GPU
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  drive = model(false);
  ram = model(false);
  gpu = model(false);

  isDriveCheck = signal(false);
  isRamCheck = signal(false);
  isGpuCheck = signal(false);

  constructor() {
    effect(() => {
      const checked =
        (!this.isDriveCheck() && this.drive()) ||
        (!this.isRamCheck() && this.ram()) ||
        (!this.isGpuCheck() && this.gpu());
      this.isDriveCheck.set(this.drive());
      this.isRamCheck.set(this.ram());
      this.isGpuCheck.set(this.gpu());

      if (checked) {
        alert('Price increased!');
      }
    });
  }
}
