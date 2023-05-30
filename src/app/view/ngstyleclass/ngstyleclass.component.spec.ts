import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleclassComponent } from './ngstyleclass.component';

describe('NgstyleclassComponent', () => {
  let component: NgstyleclassComponent;
  let fixture: ComponentFixture<NgstyleclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgstyleclassComponent]
    });
    fixture = TestBed.createComponent(NgstyleclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
