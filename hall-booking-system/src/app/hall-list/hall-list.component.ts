import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularToastService } from "angular-toasts";
import { DataSharingService } from '../data-sharing.service';



@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  constructor(private toast:AngularToastService, private router:Router, private datasharing: DataSharingService) { }

  ngOnInit(): void {
  }

  Book(id:string){
    this.datasharing.HallName.next(id);
    this.router.navigate(['confirm-booking']);
    this.toast.success(id,'please enter booking details!',{
      timeOut: "5000",
      theme: "theme-2",
      hideCloseButton: "false",
      hideImage: "false",
    });
  }

}
