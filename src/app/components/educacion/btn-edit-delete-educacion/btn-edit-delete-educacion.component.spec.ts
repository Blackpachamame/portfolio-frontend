import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditDeleteEducacionComponent } from './btn-edit-delete-educacion.component';

describe('BtnEditDeleteEducacionComponent', () => {
  let component: BtnEditDeleteEducacionComponent;
  let fixture: ComponentFixture<BtnEditDeleteEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditDeleteEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEditDeleteEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
