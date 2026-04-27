import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  successMessage = '';

  onSubmit() {
    // Call your API here
    console.log('Contact form data:', this.contact);
    this.submitted = true;
    this.successMessage = 'Thank you! We will get back to you shortly.';
  }
}
