import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePagePopupComponent } from './remove-page-popup.component';

describe('RemovePagePopupComponent', () => {
  let component: RemovePagePopupComponent;
  let fixture: ComponentFixture<RemovePagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
