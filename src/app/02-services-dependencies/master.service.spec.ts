import { ValueService } from './../01-services/value.service';
import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let masterService: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    masterService = TestBed.inject(MasterService);
  });


  //Tres formas de testear el metodo getValue

  //Injectando el servicio real
  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  //Insertando un objeto fake
  it('#getValue should return facked value from a fake object', () => {
    const fake = { getValue: () => 'real value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('real value');
  });

  //Por medio de spy
  it('#getValue should return stubbed value from a spy', () => {
    //Create SpyObj - El primer argumento es el servicio que queremos espiar
    //              - El segundo argumento es el metodo de ese servicio que queremos espiar
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue'])

    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    //Comprobamos que el resultado esperado sea el correcto
    expect(masterService.getValue()).toBe(stubValue);

    //Comprobamos que el numero de llamadas al metodo sea el correcto
    //En este caso solo tenemos una llamada al metodo
    expect(valueServiceSpy.getValue.calls.count()).toBe(1);

    //Tambien podriamos comprobar, en el caso de tener varias llamadas, el valor que retorna
    // la ultima llamada

    expect (valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  })


});
