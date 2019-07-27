import { Component, EventEmitter, Output } from '@angular/core';

import appointments from '../../../assets/doctor-appointment.json';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html'
})
export class DoctorAppointmentComponent {
  appointmentList = appointments;
  selectedUser = '';

  @Output() selectedUserId = new EventEmitter();

  onAppointmentSelection(appointment) {
    console.log(appointment);
  }

  onClickSelected(i: any)
  {
    this.selectedUser = i;
    this.selectedUserId.emit(this.selectedUser);
  }

}
