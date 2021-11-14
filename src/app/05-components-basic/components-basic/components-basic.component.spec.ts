import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBasicComponent } from './components-basic.component';

describe('ComponentsBasicComponent', () => {
  let component: ComponentsBasicComponent;
  let fixture: ComponentFixture<ComponentsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsBasicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Testing #clicked', () => {
    expect(component.isOn).toBeFalsy();
    component.clicked();
    expect(component.isOn).toBeTruthy();
    component.clicked();
    expect(component.isOn).toBeFalsy();
  });

  it('Testing #message', () => {

    //El metodo "toMatch()" evalua o bien un string o expresiones regulares
    //En este caso esta evaluando una expresion regular en la que miramos
    // si la frase contiene la palabra "Apagada" o "Encendida" dependiendo el caso

    expect(component.message).toMatch(/Apagada/i);
    component.clicked();
    expect(component.message).toMatch(/Encendida/i);

  })
});
