import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius'
})
export class ToCelciusPipe implements PipeTransform {

  transform(value: number): string {
    return Math.round((value - 32) * 5/9) + ' C°';
  }
}
