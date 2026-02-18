import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = { username: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe({
      next: (res) => {
        this.auth.saveUser(res);
        this.router.navigate(['/countries']);
      },
      error: () => {
        this.error = 'Invalid credentials';
      }
    });
  }
}
