import { Component, OnInit } from '@angular/core';

import doctors from '../../assets/doctors.json';
import users from '../../assets/users.json';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html'
})

export class BookAppointmentComponent implements OnInit {
  doctorList = doctors;
  userList = users;
  selectedDoctor = null;
  selectedUser = null;
  showDoctorsDetail = false;
  showUserDetail = false;
  showBookAppointmentButton = false;

  ngOnInit() {
    console.log('init book appointment component');
  }

  onDoctorSelect() {
    if (this.selectedDoctor !== null) {
      this.showDoctorsDetail = true;
    } else {
      this.showDoctorsDetail = false;
    }
  }

  onUserSelect() {
    if (this.selectedUser !== null) {
      this.showUserDetail = true;
    } else {
      this.showUserDetail = false;
    }
  }

  onBookAppointment() {

  }
}
