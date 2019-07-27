import { Component } from '@angular/core';

import users from '../../assets/users.json';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html'
})
export class ShowUsersComponent {
  userList = users;

}
