import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchvalueChildComponent } from './watchvalue-child.component';

describe('WatchvalueChildComponent', () => {
  let component: WatchvalueChildComponent;
  let fixture: ComponentFixture<WatchvalueChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchvalueChildComponent]
    });
    fixture = TestBed.createComponent(WatchvalueChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
