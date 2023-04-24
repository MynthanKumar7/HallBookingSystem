import { Component, OnInit } from '@angular/core';
import { AngularToastService } from "angular-toasts";
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  HallName:string = '';
  Booked:string = 'false';
  
  constructor(private toast:AngularToastService, private router:Router, private datasharing: DataSharingService) { 
    this.datasharing.HallName.subscribe(value =>{
      this.HallName = value;
    });
    this.datasharing.Booked.subscribe(value =>{
      this.Booked = value;
    });
  }

  ngOnInit(): void {
  }

  Submit(){
    this.datasharing.Booked.next('true');
    this.toast.success("Booking Confirmed", "Hall has been booked successfully!",{
      timeOut: "5000",
      theme: "theme-2",
      hideCloseButton: "false",
      hideImage: "false",
    });
  }
}
