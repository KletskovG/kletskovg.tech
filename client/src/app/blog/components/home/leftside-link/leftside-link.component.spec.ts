import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideLinkComponent } from './leftside-link.component';

describe('LeftsideLinkComponent', () => {
  let component: LeftsideLinkComponent;
  let fixture: ComponentFixture<LeftsideLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsideLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
