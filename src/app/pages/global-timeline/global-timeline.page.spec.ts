import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalTimelinePage } from './global-timeline.page';

describe('GlobalTimelinePage', () => {
  let component: GlobalTimelinePage;
  let fixture: ComponentFixture<GlobalTimelinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlobalTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
