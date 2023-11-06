import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTagComponent } from './skill-tag.component';

describe('SkillTagComponent', () => {
  let component: SkillTagComponent;
  let fixture: ComponentFixture<SkillTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillTagComponent]
    });
    fixture = TestBed.createComponent(SkillTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
