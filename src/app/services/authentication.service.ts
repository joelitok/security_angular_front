import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host:string="http://localhost:8085";

  constructor(private http:HttpClient) {}

  
  login(user:User){
   return this.http.post(this.host+"/login", user,{observe:'response'});
  }

  saveToken(jwt:any){
    localStorage.setItem('token', jwt);
  }

}
