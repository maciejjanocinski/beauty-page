import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2Component } from './block2.component';

describe('Block2Component', () => {
  let component: Block2Component;
  let fixture: ComponentFixture<Block2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Block2Component]
    });
    fixture = TestBed.createComponent(Block2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
