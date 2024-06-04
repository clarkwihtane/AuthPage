import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  email:string='';
  password:string=''; 


  constructor(private auth : AuthService){}


 register(){
  this.auth.logout();
 }

}
