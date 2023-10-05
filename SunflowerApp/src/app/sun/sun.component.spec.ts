import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunComponent } from './sun.component';

describe('SunComponent', () => {
  let component: SunComponent;
  let fixture: ComponentFixture<SunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunComponent]
    });
    fixture = TestBed.createComponent(SunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
