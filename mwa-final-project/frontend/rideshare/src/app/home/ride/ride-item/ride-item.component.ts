import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html'
})
export class RideItemComponent implements OnInit {
  @Input() ride: Ride;
  constructor() { }

  ngOnInit(): void {
  }
  getYearOfDate(date) {
    return new Date(date).getFullYear();
  }
}
