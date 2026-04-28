import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.scss'
})
export class EventRegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      ticketCount: [1, [Validators.min(1), Validators.max(10)]],
      attendees: this.fb.array([])
    });
  }

  get attendees(): FormArray {
    return this.form.get('attendees') as FormArray;
  }

  addAttendee() {
    this.attendees.push(this.fb.group({
      attendeeName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]]
    }));
  }

  removeAttendee(index: number) {
    this.attendees.removeAt(index);
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }
}
