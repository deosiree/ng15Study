import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipereverseComponent } from './pipereverse.component';

describe('PipereverseComponent', () => {
  let component: PipereverseComponent;
  let fixture: ComponentFixture<PipereverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipereverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipereverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
