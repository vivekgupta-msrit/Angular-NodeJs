import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OnboardUserComponent } from './onboard-user/onboard-user.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowAppointmentsComponent } from './show-appointments/show-appointments.component';

import { HomeComponent } from './home/home.component';
import { NGOComponent } from './ngo/ngo.component';
import { DoctorToolbarComponent } from './doctor-module/doctor-toolbar/doctor-toolbar.component';
import { DoctorComponent } from './doctor-module/doctor/doctor.component';
import { DoctorAppointmentComponent } from './doctor-module/doctor-appointment/doctor-appointment.component';
import { UserToolbarComponent } from './user-module/user-toolbar/user-toolbar.component';
import { UserComponent } from './user-module/user/user.component';
import { ProcessAppointmentComponent } from './doctor-module/process-appointment/process-appointment.component';


import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileListComponent } from './file-list/file-list.component';
import { DoctorHomeComponent } from './doctor-module/doctor-home/doctor-home.component';
import { NGOHomeComponent } from './ngp-home/ngo-home.component';
import { UserAppointmentComponent } from './user-module/user-appointment/user-appointment.component';
import { UserBookAppointmentComponent } from './user-module/user-book-appointment/user-book-appointment.component';
import { UserHomeComponent } from './user-module/user-home/user-home.component';
import { NGOReportingComponent } from './ngo-reporting/ngo-reporting.component';
import { MedicalHistoryComponent } from './user-module/medical-history/medical-history.component';
/* import { AppRoutingModule } from './app-routing.module'; */

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ngo',
    component: NGOComponent,
    children: [
      {
        path: 'ngo-home',
        component: NGOHomeComponent
      },
      {
        path: 'onboard-user',
        component: OnboardUserComponent
      },
      {
        path: 'users',
        component: ShowUsersComponent
      },
      {
        path: 'book-appointment',
        component: BookAppointmentComponent
      },
      {
        path: 'appointments',
        component: ShowAppointmentsComponent
      },
      {
        path: 'ngo-reporting',
        component: NGOReportingComponent
      }
    ]
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
      {
        path: 'home',
        component: DoctorHomeComponent
      },
      {
        path: 'appointments',
        component: DoctorAppointmentComponent
      },
      {
        path: 'process-appointment',
        component: ProcessAppointmentComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: UserHomeComponent
      },
      {
        path: 'appointments',
        component: UserAppointmentComponent
      },
      {
        path: 'book-appointment',
        component: UserBookAppointmentComponent
      },
      {
        path: 'medical-history',
        component: MedicalHistoryComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    FileListComponent,
    ToolbarComponent,
    OnboardUserComponent,
    BookAppointmentComponent,
    ShowUsersComponent,
    ShowAppointmentsComponent,
    HomeComponent,
    NGOComponent,
    DoctorToolbarComponent,
    DoctorComponent,
    DoctorAppointmentComponent,
    UserToolbarComponent,
    UserComponent,
    ProcessAppointmentComponent,
    DoctorHomeComponent,
    NGOHomeComponent,
    UserAppointmentComponent,
    UserBookAppointmentComponent,
    UserHomeComponent,
    NGOReportingComponent,
    MedicalHistoryComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    /* AppRoutingModule, */
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
})
export class AppModule { }
