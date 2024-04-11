import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerRegisterRequest } from '../../core/model/http-request/customer-register-request.model';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ICustomerLoginRequest } from '../../core/model/http-request/customer-login-request.model';
import { ICustomer } from '../../core/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl: string = 'http://localhost:8000/api/customer';

  private currentUserSubject: BehaviorSubject<ICustomer>;
  public currentUser: Observable<ICustomer>;

  constructor(private http: HttpClient) {
    const userJsonString = localStorage.getItem('currentUser');
    const user = userJsonString !== null ? JSON.parse(userJsonString) : null;

    this.currentUserSubject = new BehaviorSubject<ICustomer>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(params: ICustomerLoginRequest): Observable<any> {
    return of({
      id: 1,
      first_name: 'Mukesh',
      last_name: 'Patel',
      email: 'mukesh.nanji@gmail.com',
      phone: '9892409105',
      email_verified_at: null,
      phone_verified_at: null,
      status: 0,
      created_at: '2024-02-25T15:47:48.000000Z',
      updated_at: '2024-02-25T15:47:48.000000Z',
      token: '3|YciTfxb5wBvzl7eDVm53HE0RVr3sWHPhRHDcxMjd',
    });
    
    return this.http.post(`${this.baseUrl}/login`, params).pipe(
      map((user: ICustomer) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  register(params: ICustomerRegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, params);
  }
}
