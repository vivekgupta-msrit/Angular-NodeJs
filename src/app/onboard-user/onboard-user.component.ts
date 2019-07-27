import { Component } from '@angular/core';

@Component({
  selector: 'app-onboard-user',
  templateUrl: './onboard-user.component.html'
})
export class OnboardUserComponent {
  onCreateUser() {
    alert('user created');
  }
}
