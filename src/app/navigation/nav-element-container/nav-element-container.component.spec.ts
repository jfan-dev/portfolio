import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavElementContainerComponent } from './nav-element-container.component';

describe('NavElementContainerComponent', () => {
  let component: NavElementContainerComponent;
  let fixture: ComponentFixture<NavElementContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavElementContainerComponent]
    });
    fixture = TestBed.createComponent(NavElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
