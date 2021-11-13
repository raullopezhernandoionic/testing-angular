import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  //Primer metodo a probar
  public getValue(): string {
    return 'real value';
  }

  //Segundo metodo a probar
  public getObservableValue(): Observable<string> {
    return of('observable value');
  }


  //Tercer metodo a probar
  public getPromiseValue(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise value');
    })
  }




}
