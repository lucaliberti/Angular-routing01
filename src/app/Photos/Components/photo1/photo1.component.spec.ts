import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo1Component } from './photo1.component';

describe('Photo1Component', () => {
  let component: Photo1Component;
  let fixture: ComponentFixture<Photo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Photo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
