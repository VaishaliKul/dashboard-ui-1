import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  loginCheck(email, password): any {
    return this.http.get('https://reqres.in/api/login', {
      body: {
        email,
        password,
      },
    } as any);
  }
  constructor(private http: HttpClient) {}
}
