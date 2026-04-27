import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  // @ViewChild('feedbackForm') feedbackForm!: NgForm;
  
  feedback = {
    rating: null as number | null,
    category: '',
    comment: '',
    anonymous: false
  };

  ratings = [1, 2, 3, 4, 5];
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    console.log('Feedback submitted:', this.feedback);
    this.submitted = true;
  }

  resetForm() {                          // ← remove form parameter
    this.submitted = false;
    this.feedback = {
    rating: null,
    category: '',
    comment: '',
    anonymous: false
  };
  }
}
