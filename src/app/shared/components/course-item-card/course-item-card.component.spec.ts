import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourseItemCardComponent } from './course-item-card.component';

describe('CourseItemCardComponent', () => {
  let component: CourseItemCardComponent;
  let fixture: ComponentFixture<CourseItemCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
