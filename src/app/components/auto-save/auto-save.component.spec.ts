import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSaveComponent } from './auto-save.component';

describe('AutoSaveComponent', () => {
  let component: AutoSaveComponent;
  let fixture: ComponentFixture<AutoSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
