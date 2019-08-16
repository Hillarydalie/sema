import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semaTarehe'
})
export class SemaTarehePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
