import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalTimelinePage } from './local-timeline.page';

describe('LocalTimelinePage', () => {
  let component: LocalTimelinePage;
  let fixture: ComponentFixture<LocalTimelinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
