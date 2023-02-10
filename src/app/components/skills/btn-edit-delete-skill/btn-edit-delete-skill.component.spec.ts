import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditDeleteSkillComponent } from './btn-edit-delete-skill.component';

describe('BtnEditDeleteSkillComponent', () => {
  let component: BtnEditDeleteSkillComponent;
  let fixture: ComponentFixture<BtnEditDeleteSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditDeleteSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEditDeleteSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
