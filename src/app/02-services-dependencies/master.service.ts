import { Injectable } from '@angular/core';
import { ValueService } from '../01-services/value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  //Injectamos un servicio en otro servicio y pasamos a realizar las pruebas con Jasmine
  constructor( private valueService:ValueService) { }

  getValue(){
    return this.valueService.getValue();
  }
}
