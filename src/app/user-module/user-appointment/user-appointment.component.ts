import { Component } from '@angular/core';

import appointments from '../../../assets/user-appointment.json';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html'
})
export class UserAppointmentComponent {
  appointmentList = appointments;
}
