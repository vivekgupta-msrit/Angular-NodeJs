import { Component, OnInit } from '@angular/core';

import doctors from '../../../assets/doctors.json';
import users from '../../../assets/users.json';

@Component({
  selector: 'app-user-book-appointment',
  templateUrl: './user-book-appointment.component.html'
})

export class UserBookAppointmentComponent {
  doctorList = doctors;
  userList = users;
  selectedDoctor = null;
  selectedUser = null;
  showDoctorsDetail = false;
  showBookAppointmentButton = false;

  onDoctorSelect() {
    if (this.selectedDoctor !== null) {
      this.showDoctorsDetail = true;
    } else {
      this.showDoctorsDetail = false;
    }
  }

  onBookAppointment() {

  }
}
