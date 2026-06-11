import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'filterActive',
  pure: true
})
export class FilterActivePipe implements PipeTransform {

  transform(users: User[], filterStatus: boolean | null): User[] {
    console.log(users);
    if (filterStatus === null) return users;          // Show All
    return users.filter(u => u.isActive === filterStatus); // Active / Inactive
  }

}
