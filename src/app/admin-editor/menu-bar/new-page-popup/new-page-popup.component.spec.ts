import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPagePopupComponent } from './new-page-popup.component';

describe('NewPagePopupComponent', () => {
  let component: NewPagePopupComponent;
  let fixture: ComponentFixture<NewPagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
