import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFeedIComponent } from './community-feed-i.component';

describe('CommunityFeedIComponent', () => {
  let component: CommunityFeedIComponent;
  let fixture: ComponentFixture<CommunityFeedIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFeedIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFeedIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
