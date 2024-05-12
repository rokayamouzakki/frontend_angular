import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserStorageService } from '../stotage/user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  register(signupRequest:any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up", signupRequest)

  }

  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username, password};

    return this.http.post(BASIC_URL + 'authenticate', body, { headers, observe: 'response'}).pipe(
      map((res) =>{
        const token = res.headers.get('authorization')?.substring(7);
        console.log(token);
        const user = res.body;
        console.log(user);

        if(token && user){
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(JSON.stringify(user));
          return true;
        }
        return false; 

      })

    )
  }
}
function res(value: HttpResponse<Object>, index: number): unknown {
  throw new Error('Function not implemented.');
}

