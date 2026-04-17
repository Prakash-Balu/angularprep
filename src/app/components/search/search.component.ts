import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText = '';
  filterField = 'name';

  // Same array reference mutated — pure pipe would MISS these changes
  employees = [
    { id: 1, name: 'Alice Johnson',  dept: 'Engineering', role: 'Senior Dev' },
    { id: 2, name: 'Bob Smith',      dept: 'Design',      role: 'UI Lead'    },
    { id: 3, name: 'Charlie Brown',  dept: 'Engineering', role: 'Junior Dev' },
    { id: 4, name: 'Diana Prince',   dept: 'HR',          role: 'Manager'    },
    { id: 5, name: 'Edward Norton',  dept: 'Design',      role: 'UX Designer'},
  ];

  addEmployee() {
    // Mutates the existing array — pure pipe would NOT detect this
    this.employees.push({
      id: this.employees.length + 1,
      name: 'Frank Castle',
      dept: 'Engineering',
      role: 'DevOps'
    });
  }
}
