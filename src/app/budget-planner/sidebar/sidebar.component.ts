import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 isSlideOut:boolean=false;
 constructor(private router : Router ){}
 
 toggleSlideOut() : void{
  this.isSlideOut=!this.isSlideOut;
 }


 onHome(){
  this.router.navigate(['dashboard']);
 }
 onProfile(){
  this.router.navigate(['profile']);
 }
onHistory(){
  this.router.navigate(['history']);
}
onLogout(){
  this.router.navigate(['']);
 }
}
