import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string, field: string = 'name'): any[] {
    if (!employees || !searchText) return employees;

    const text = searchText.toLowerCase();
    return employees.filter(emp =>
      emp[field]?.toString().toLowerCase().includes(text)
    );
  }

}
