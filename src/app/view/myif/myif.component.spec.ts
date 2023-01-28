import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyifComponent } from './myif.component';

describe('MyifComponent', () => {
  let component: MyifComponent;
  let fixture: ComponentFixture<MyifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
