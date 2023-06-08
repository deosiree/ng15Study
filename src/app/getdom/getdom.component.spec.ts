import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdomComponent } from './getdom.component';

describe('GetdomComponent', () => {
  let component: GetdomComponent;
  let fixture: ComponentFixture<GetdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
