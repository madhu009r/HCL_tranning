import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user = { username: '', password: '' };
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (!this.user.username || !this.user.password) {
      this.error = 'All fields are required';
      return;
    }

    this.auth.register(this.user).subscribe({
      next: () => {
        this.message = 'Registration successful!';
        this.error = '';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (err) => {
        this.error = err.error;
        this.message = '';
      }
    });
  }
}
