import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Auth } from '../auth';

function passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
}

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;
  successMsg = '';
  errMsg = '';

  constructor(private fb: FormBuilder, private auth: Auth) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: passwordMatchValidator }
    );
  }

  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }
  get confirmPassword() { return this.registerForm.get('confirmPassword')!; }
  get passwordMismatch() {
    return this.registerForm.errors?.['mismatch'] && this.confirmPassword.touched;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.successMsg = '';
    this.errMsg = '';

    const { email, password, confirmPassword } = this.registerForm.value;

    this.auth.register({ email, password, confirmPassword }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMsg = 'Registration successful! You can now login.';
        this.registerForm.reset();
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errMsg = 'Network error. Please check your connection.';
        } else {
          this.errMsg = err.error?.message || 'Registration failed. Please try again.';
        }
      },
    });
  }
}
