import { Component,  Input } from '@angular/core';
import users from '../../../assets/users.json';
/* import appointment from '../../../assets/appointments.json'; */

@Component({
  selector: 'app-process-appointment',
  templateUrl: './process-appointment.component.html'
})
export class ProcessAppointmentComponent {
  userList = users;
  /* @Input() selectedUser: any; */

  /* constructor()
  {
    debugger;
  } */
  /* onUserSelect() {
    if (this.selectedUser !== null) {
      this.showUserDetail = true;
    } else {
      this.showUserDetail = false;
    }
  } */
}
