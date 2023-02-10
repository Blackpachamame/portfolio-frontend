import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditDeleteProyectoComponent } from './btn-edit-delete-proyecto.component';

describe('BtnEditDeleteProyectoComponent', () => {
  let component: BtnEditDeleteProyectoComponent;
  let fixture: ComponentFixture<BtnEditDeleteProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditDeleteProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEditDeleteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
