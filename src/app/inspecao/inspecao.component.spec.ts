import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecaoComponent } from './inspecao.component';

describe('InspecaoComponent', () => {
  let component: InspecaoComponent;
  let fixture: ComponentFixture<InspecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
