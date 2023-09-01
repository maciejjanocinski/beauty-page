import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpBlock1Component } from './hp-block1.component';

describe('Block1Component', () => {
  let component: HpBlock1Component;
  let fixture: ComponentFixture<HpBlock1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpBlock1Component]
    });
    fixture = TestBed.createComponent(HpBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
