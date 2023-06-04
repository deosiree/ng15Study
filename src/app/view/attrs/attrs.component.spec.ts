import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrsComponent } from './attrs.component';

describe('AttrsComponent', () => {
  let component: AttrsComponent;
  let fixture: ComponentFixture<AttrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttrsComponent]
    });
    fixture = TestBed.createComponent(AttrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
