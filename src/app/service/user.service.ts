import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../landing/users/users.component";


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

 /* getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }*/

}
