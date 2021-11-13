import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  //En el beforeEach se crea una instancia por cada una de las pruebas

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  //DoneFn -- Debe ir colocada al final de la prueba y se utiliza en pruebas asyncronas para avisar
  // al software de testeo Jasmine que ya ha terminado la prueba

  it('#getObservableValue return value from observable', (done: DoneFn) => {
    expect(service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    }))
  })

  it('#getPromiseValue should return value from a promise', (done:DoneFn) =>{
    service.getPromiseValue().then((value)=>{
      expect(value).toBe('promise value');
      done();
    })
  })
});
