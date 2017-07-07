import { Pipe, PipeTransform } from '@angular/core';
import { TodoStatus } from './todoStatusEnum';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterType?: any): any {
    switch (filterType) {
      case TodoStatus[1]:
        return value.filter(item => {return !item.done});
      case TodoStatus[2]:
        return value.filter(item => {return item.done});

      default:
        return value;
    }
  }

}
