import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterType?: any): any {
    switch (filterType) {
      case 'Activate':
        return value.filter(item => {return !item.done});
      case 'Completed':
        return value.filter(item => {return item.done});

      default:
        return value;
    }
  }

}
