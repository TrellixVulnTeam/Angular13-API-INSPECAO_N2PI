import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarInspecaoComponent } from './adicionar-editar-inspecao.component';

describe('AdicionarEditarInspecaoComponent', () => {
  let component: AdicionarEditarInspecaoComponent;
  let fixture: ComponentFixture<AdicionarEditarInspecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEditarInspecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarInspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
