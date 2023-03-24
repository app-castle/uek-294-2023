import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  public onLogin(form: NgForm) {
    // abbrechen wenn form invalid ist
    if (form.invalid) return;

    // email & passwort aus form holen
    const email = form.value.email;
    const password = form.value.password;

    // login request abschicken und token in session storage speichern
    this.userService.login(email, password).subscribe((result) => {
      sessionStorage.setItem('auth-token', result.accessToken);
    });
  }
}
