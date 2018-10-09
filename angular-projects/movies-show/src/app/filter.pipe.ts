import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchField: string): any[] {
    if(!items) return [];
    if(!searchField) {
      return items;
    }
    searchField = searchField.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchField);
    });
  }

}
