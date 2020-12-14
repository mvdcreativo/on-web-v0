import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogCuposComponent } from './dialog-cupos.component';

describe('DialogCuposComponent', () => {
  let component: DialogCuposComponent;
  let fixture: ComponentFixture<DialogCuposComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
