import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { FilterActivePipe } from '../../pipes/filter-active.pipe';

@Component({
  selector: 'app-add-user-filter',
  imports: [CommonModule, FormsModule, FilterActivePipe],
  templateUrl: './add-user-filter.component.html',
  styleUrl: './add-user-filter.component.scss',
})
export class AddUserFilterComponent {
  newUserName: string = '';
  newUserStatus: boolean = true;
  filterStatus: boolean | null = null // null = Show All

  users: User[] = [
    { name: 'Alice', isActive: true },
    { name: 'Bob',   isActive: false }
  ];

  addUser() {
    if (!this.newUserName.trim()) {
      alert('Please enter a user name!');
      return;
    }

    // this.users.push({
    //   name: this.newUserName.trim(),
    //   isActive: this.newUserStatus
    // });

    this.users.push({ name: 'Charlie', isActive: true }); 

    // Reset fields
    this.newUserName = '';
    this.newUserStatus = true;

    // console.log(this.users);
  }

// ✅ Pure pipe WILL re-run — new array reference
// addUser() {
//   this.users = [...this.users, { name: 'Charlie', isActive: true }];
// }

}
