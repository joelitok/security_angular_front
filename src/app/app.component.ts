import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'securiteFront';
constructor( private authService:AuthenticationService,private router:Router){
}
onLogout(){
  this.authService.logout();
  this.router.navigateByUrl('/login');
}


}
