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

  url = 'http://localhost:9090/HealthCare2/services/';

  user: Observable<User[]>;

  //Testing
  test() {
    return this.http.get(this.url + 'user/test');
  }

  //Add a new member
  save(user: User) {
    return this.http.post(this.url + 'user/create', JSON.stringify(user), headeroption);
  }
}
