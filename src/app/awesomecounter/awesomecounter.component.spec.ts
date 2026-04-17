import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomecounterComponent } from './awesomecounter.component';

describe('AwesomecounterComponent', () => {
  let component: AwesomecounterComponent;
  let fixture: ComponentFixture<AwesomecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwesomecounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
