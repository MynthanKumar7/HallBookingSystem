import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularToastService } from "angular-toasts";
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;
  
  constructor(private toast:AngularToastService, private router:Router, private datasharing:DataSharingService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  Submit() {
    this.datasharing.LoggedIn.next('true');
    this.datasharing.UserName.next('jan');
    this.router.navigate(['halls']);
    this.toast.success("Logged In!", "Logged in successfully!",{
      timeOut: "5000",
      theme: "theme-2",
      hideCloseButton: "false",
      hideImage: "false",
    });
  }

}
