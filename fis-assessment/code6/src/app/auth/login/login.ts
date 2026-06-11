import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private auth: Auth) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.successMsg = '';
    this.errorMsg = '';

    const { email, password } = this.loginForm.value;

    // Fetch all users and match credentials against db.json
    this.auth.getUsers().subscribe({
      next: (users) => {
        this.isLoading = false;
        const matchedUser = users.find(
          (u) => u.email === email && u.password === password
        );
        if (matchedUser) {
          this.successMsg = `Welcome back, ${matchedUser.email}! Login successful.`;
          this.loginForm.reset();
        } else {
          this.errorMsg = 'Invalid email or password. Please try again.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errorMsg = 'Network error. Please check your connection.';
        } else {
          this.errorMsg = 'Something went wrong. Please try again later.';
        }
      }
    });
  }
}
