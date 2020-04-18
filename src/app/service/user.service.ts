import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8083/';

  user: Observable<User[]>;

  username: string;

  //Add a new member
  save(user: User) {
    return this.http.post(this.url + 'user/newUser', JSON.stringify(user), headeroption);
  }

  //get user login details
  userLogin() {
    return this.http.get(this.url + 'user/' + this.username);
  }
}
