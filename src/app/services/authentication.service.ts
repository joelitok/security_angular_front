import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host:string="http://localhost:8085";

  private jwtToken: any;
  private roles:Array<any>=[];

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) {}

  
  login(user:User){
   return this.http.post(this.host+"/login", user,{observe:'response'});
  }

  
  saveToken(jwt:any){
    this.jwtToken=jwt;
    localStorage.setItem('token', jwt);
    this.roles = this.jwtHelper.decodeToken(this.jwtToken).roles;
    this.isAdmin();
   
  }


  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }
  getTasks(){
    this.loadToken();
    return this.http.get(this.host+"/tasks", { headers: new HttpHeaders().set("Authorization", this.jwtToken)});
  }
  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }
  isAdmin(){
for(let r of this.roles){
  console.log(r.authority)
if(r.authority=='ADMIN') return true;

}
return true;
}
  
}
