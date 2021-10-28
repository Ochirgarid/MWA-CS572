import { Component, OnInit } from '@angular/core';
import { RideService } from '../../../services/ride.service';

interface Car {
  _id: string;
  model: string;
  year: Date;
  color: string;
}

interface Ride {
  _id: number;
  from:string;
  to:string;
  createdOn: Date;
  seatsNumber: number;
  car: Car;
}

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html'
})
export class RidesComponent implements OnInit {

  allRides: Ride[] = [];
  constructor(private rideService: RideService ) { 
  }

  isEmpty(): boolean {
    return this.allRides.length == 0;
  }

  ngOnInit(): void {
    this.rideService.dataLoadCalled$.subscribe((data) => {
      this.updateRide(data);
    });
    this.updateRide(this.rideService.getFirstSearchResult());
  }
  
  updateRide(rideData){    
    this.allRides = rideData;
  }
}
