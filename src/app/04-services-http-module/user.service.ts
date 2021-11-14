import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = [] as any;
  public isLoggedIn = true;
  public user = { name: 'Test User'};
  public error = false;


  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get<any[]>(this.url).subscribe(

      //Prueba 1 - Caso Exito
      (users) => {
        this.users = users;
      },

      //Prueba2 - Caso error
      (error) => {
        this.error = true;
      }
    );

  }

}
