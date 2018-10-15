import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFolderPopupComponent } from './new-folder-popup.component';

describe('NewFolderPopupComponent', () => {
  let component: NewFolderPopupComponent;
  let fixture: ComponentFixture<NewFolderPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFolderPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFolderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
