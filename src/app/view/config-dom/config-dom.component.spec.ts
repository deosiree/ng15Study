import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDomComponent } from './config-dom.component';

describe('ConfigDomComponent', () => {
  let component: ConfigDomComponent;
  let fixture: ComponentFixture<ConfigDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
