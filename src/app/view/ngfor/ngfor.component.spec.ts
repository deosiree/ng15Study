import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforComponent } from './ngfor.component';

describe('NgforComponent', () => {
  let component: NgforComponent;
  let fixture: ComponentFixture<NgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforComponent]
    });
    fixture = TestBed.createComponent(NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
