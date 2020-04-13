import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavesPageComponent } from './raves-page.component';

describe('RavesPageComponent', () => {
  let component: RavesPageComponent;
  let fixture: ComponentFixture<RavesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
