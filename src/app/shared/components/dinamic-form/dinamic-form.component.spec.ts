import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DinamicFormComponent } from './dinamic-form.component';

describe('DinamicFormComponent', () => {
  let component: DinamicFormComponent;
  let fixture: ComponentFixture<DinamicFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
