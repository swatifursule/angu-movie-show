import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldsort'
})
export class FieldsortPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    if(!array) return [];
    if(!field) {
      return array;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
