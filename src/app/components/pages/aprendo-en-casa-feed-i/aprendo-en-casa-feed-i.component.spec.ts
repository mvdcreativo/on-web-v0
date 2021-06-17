import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendoEnCasaFeedIComponent } from './aprendo-en-casa-feed-i.component';

describe('AprendoEnCasaFeedIComponent', () => {
  let component: AprendoEnCasaFeedIComponent;
  let fixture: ComponentFixture<AprendoEnCasaFeedIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendoEnCasaFeedIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendoEnCasaFeedIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
