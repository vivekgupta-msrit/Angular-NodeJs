import { Component } from '@angular/core';

import appointments from '../../assets/appointments.json';

@Component({
  selector: 'app-show-appointments',
  templateUrl: './show-appointments.component.html'
})
export class ShowAppointmentsComponent {
  appointmentList = appointments;

}
