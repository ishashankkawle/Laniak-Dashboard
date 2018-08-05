import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFolderPopupComponent } from './open-folder-popup.component';

describe('OpenFolderPopupComponent', () => {
  let component: OpenFolderPopupComponent;
  let fixture: ComponentFixture<OpenFolderPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFolderPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFolderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
