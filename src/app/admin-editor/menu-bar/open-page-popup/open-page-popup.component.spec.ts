import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPagePopupComponent } from './open-page-popup.component';

describe('OpenPagePopupComponent', () => {
  let component: OpenPagePopupComponent;
  let fixture: ComponentFixture<OpenPagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
