import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users  = [] as any;

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUsers(): void {
    this.getUsersFromApi().subscribe(
      (users) => (this.users = users),
      (error) => (this.users = undefined)
    );

  }


  private getUsersFromApi(): Observable<any> {
    return this.http.get(this.url);

  }
}
