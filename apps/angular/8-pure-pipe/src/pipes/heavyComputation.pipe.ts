import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heavyComputation',
  pure: true,
})
export class HeavyComputationPipe implements PipeTransform {
  transform(value: string, index: number, showIndex: boolean = true): string {
    return `${value} - ${showIndex ? index : ''}`;
  }
}
