import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTimelinePage } from './home-timeline.page';

describe('HomeTimelinePage', () => {
  let component: HomeTimelinePage;
  let fixture: ComponentFixture<HomeTimelinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
