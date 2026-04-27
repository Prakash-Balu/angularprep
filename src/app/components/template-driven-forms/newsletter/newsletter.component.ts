import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  subscriber = {
    email: '',
    firstName: ''
  };

  isLoading = false;
  isSubscribed = false;
  errorMsg = '';

  onSubscribe(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;
    this.errorMsg = '';

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.isSubscribed = true;
      form.reset();   // clears form + resets validation state
    }, 1000);
  }
}
