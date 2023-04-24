import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:string = 'false';
  constructor(private datasharing: DataSharingService) {
    this.datasharing.LoggedIn.subscribe(value =>{
      this.isLoggedIn = value;
    });
   }

  ngOnInit(): void {
  }

}
