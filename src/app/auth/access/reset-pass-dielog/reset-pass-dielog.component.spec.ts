import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetPassDielogComponent } from './reset-pass-dielog.component';

describe('ResetPassDielogComponent', () => {
  let component: ResetPassDielogComponent;
  let fixture: ComponentFixture<ResetPassDielogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassDielogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassDielogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
