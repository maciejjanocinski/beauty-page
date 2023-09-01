import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpBlock2Component } from './hp-block2.component';

describe('Block2Component', () => {
  let component: HpBlock2Component;
  let fixture: ComponentFixture<HpBlock2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpBlock2Component]
    });
    fixture = TestBed.createComponent(HpBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
