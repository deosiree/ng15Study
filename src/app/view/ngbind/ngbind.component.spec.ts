import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbindComponent } from './ngbind.component';

describe('NgbindComponent', () => {
  let component: NgbindComponent;
  let fixture: ComponentFixture<NgbindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbindComponent]
    });
    fixture = TestBed.createComponent(NgbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
