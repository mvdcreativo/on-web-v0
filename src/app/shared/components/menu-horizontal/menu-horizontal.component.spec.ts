import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuHorizontalComponent } from './menu-horizontal.component';

describe('MenuHorizontalComponent', () => {
  let component: MenuHorizontalComponent;
  let fixture: ComponentFixture<MenuHorizontalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
