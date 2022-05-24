import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInspecaoComponent } from './mostrar-inspecao.component';

describe('MostrarInspecaoComponent', () => {
  let component: MostrarInspecaoComponent;
  let fixture: ComponentFixture<MostrarInspecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarInspecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarInspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
