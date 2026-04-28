import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-wizard',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-wizard.component.html',
  styleUrl: './event-wizard.component.scss'
})
export class EventWizardComponent implements OnInit {

  wizard!: FormGroup;
  currentStep = 1;
  totalSteps = 3;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.wizard = this.fb.group({
      step1: this.fb.group({
        title: ['', [Validators.required, Validators.minLength(5)]],
        venue: ['', Validators.required],
        status: ['draft', Validators.required]
      }),
      step2: this.fb.group({
        date:        ['', Validators.required],
        time:        ['', Validators.required],
        ticketPrice: [0, [Validators.required, Validators.min(0)]]
      }, { validators: this.futureDateValidator }),
      step3: this.fb.group({
        totalSeats: [50, [Validators.required, Validators.min(1), Validators.max(10000)]],
        description: ['', [Validators.required, Validators.minLength(20)]]
      })
    });
  }

  // __ Getter ________________________________________________
  get step1() { return this.wizard.get('step1') as FormGroup; }
  get step2() { return this.wizard.get('step2') as FormGroup; }
  get step3() { return this.wizard.get('step3') as FormGroup; }

  get currentGroup(): FormGroup {
    return this.wizard.get(`step${this.currentStep}`) as FormGroup;
  }

  // ____ Navigation _____________________________________________
  next() {
    this.currentGroup.markAllAsTouched();
    if(this.currentGroup.valid) {
      this.currentStep++;
    }
  }

  back() {
    if(this.currentStep > -1) this.currentStep--;
  }

  goToStep(step: number) {
    // only allow jumping to completed steps
    if(step < this.currentStep) this.currentStep = step;
  }

  // ___ Submit ________________________________________
  onSubmit() {
    this.wizard.markAllAsTouched();
    if(this.wizard.invalid) return;

    const payload = {
      ...this.step1.value,
      ...this.step2.value,
      ...this.step3.value
    };

    console.log('Event Payload:', payload);
    this.submitted = true;
  }

  resetWizard() {
    this.wizard.reset({ step2: { ticketPrice: 0 }, step3: { totalSeats: 50 }});
    this.currentStep = 1;
    this.submitted = false;
  }

  // ___ Cross field validator: date+time must be in the future ____
  futureDateValidator(group: AbstractControl): ValidationErrors | null {
    const date = group.get('date')?.value;
    const time = group.get('time')?.value;

    if(!date || !time) return null;

    const eventDateTime = new Date(`${date}T${time}`);
    return eventDateTime <= new Date() ? { pastDate: true } : null;
  }

  // ____ Progress % for progress bar _______________
  get progressPercent(): number {
    return ((this.currentStep - 1) / this.totalSteps) * 100;
  }

  // ── Step status helpers ──────────────────────────────────
  isStepValid(step: number): boolean {
    return (this.wizard.get(`step${step}`) as FormGroup).valid;
  }

  isStepTouched(step: number): boolean {
    return (this.wizard.get(`step${step}`) as FormGroup).touched;
  }
}