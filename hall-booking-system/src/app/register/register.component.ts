import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularToastService } from "angular-toasts";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;

  constructor(private toast:AngularToastService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      newpassword: new FormControl(''),
      confirmpassword: new FormControl(''),
    });
  }

  Submit(){
    if(this.form.valid){
      this.toast.success("Registered!", "Your registration completed successfully!",{
        timeOut: "5000",
        theme: "theme-2",
        hideCloseButton: "false",
        hideImage: "false",
      });
      this.router.navigate(['login']);
    }
  }

}
