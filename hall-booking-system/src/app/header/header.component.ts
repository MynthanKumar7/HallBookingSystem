import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { AngularToastService } from "angular-toasts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn:string = 'false';
  UserName:string = '';
  constructor(private toast:AngularToastService,private router: Router, private datasharing: DataSharingService) { 
    this.datasharing.LoggedIn.subscribe(value =>{
      this.isLoggedIn = value;
    });
    this.datasharing.UserName.subscribe(value =>{
      this.UserName = value;
    });
  }

  ngOnInit(): void {
    
  }

  Home(){
    this.router.navigate(['home']);
  }

  Halls(){
    this.router.navigate(['halls']);
  }

  Login(){
    this.router.navigate(['login']);
  }

  Register(){
    this.router.navigate(['register']);
  }

  Logout(){
    this.datasharing.LoggedIn.next('false');
    this.router.navigate(['home']);
    this.toast.success("Logged Out", "You are successfully loggedout!",{
      timeOut: "5000",
      theme: "theme-2",
      hideCloseButton: "false",
      hideImage: "false",
    });
  }

}
