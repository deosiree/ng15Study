import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchvalueComponent } from './watchvalue.component';

describe('WatchvalueComponent', () => {
  let component: WatchvalueComponent;
  let fixture: ComponentFixture<WatchvalueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchvalueComponent]
    });
    fixture = TestBed.createComponent(WatchvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
