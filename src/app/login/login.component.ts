import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode:number=0;

  constructor(private authService:AuthenticationService, private router:Router) {}

  ngOnInit(): void {
  }


  onLogin(formData:any){
    this.authService.login(formData).subscribe(
      resp=>{
        let jwt = resp.headers.get('Authorization');
         this.authService.saveToken(jwt);
       this.router.navigateByUrl('/tasks');
       console.log(resp.headers.get('Authorization'));
      }, err=>{
        this.mode=1;
        console.log("not work data");
      }
    )

  }
}
