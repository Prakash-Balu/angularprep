import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserFilterComponent } from './add-user-filter.component';

describe('AddUserFilterComponent', () => {
  let component: AddUserFilterComponent;
  let fixture: ComponentFixture<AddUserFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
