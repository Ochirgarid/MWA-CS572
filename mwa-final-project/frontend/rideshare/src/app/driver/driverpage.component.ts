import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-driverpage',
  templateUrl: './driverpage.component.html',
  styles: ['button{margin:10px}']
})
export class DriverpageComponent implements OnInit {
  user: any;
  fullname: string;
  rides: any;
  getURL: 'http://localhost:3000/driver/rides/';

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.rideService.searchRideByEmail(this.user.email, (data) => {
      if (data.success) {
        console.log(data.rides)
        this.rides = data.rides
        console.log(this.rides);
      } else {
        alert("Errorrrrr");

      }
    });
  }

}
