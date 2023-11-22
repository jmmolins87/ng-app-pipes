import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSortBy'
})
export class SortByPipe implements PipeTransform {

  transform( value: unknown, ...args: unknown[] ): unknown {
    return value;
  }

}
