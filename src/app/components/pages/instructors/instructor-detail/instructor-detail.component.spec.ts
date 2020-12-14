import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstructorDetailComponent } from './instructor-detail.component';

describe('InstructorDetailComponent', () => {
  let component: InstructorDetailComponent;
  let fixture: ComponentFixture<InstructorDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
