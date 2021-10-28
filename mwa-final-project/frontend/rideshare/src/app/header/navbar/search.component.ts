import { Component, OnInit } from '@angular/core';
import { RideService } from '../../services/ride.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .example-items-col {
        margin: auto;
      }

      .elem {
        margin: 15px;
      }

      nb-card {
        background-image: url("../../../assets/images/rideshare.png");

        background-size: inherit;
        background-color: #c0d6ca;
      }
    `
  ]
})
export class SearchComponent implements OnInit {
  searchValue = {
    from: "",
    to: "",
    rideDate: ""
  }
  constructor(private rideService: RideService) { }

  ngOnInit(): void {
  }

  searchRides() {
    this.rideService.searchRide(this.searchValue);
  }
  fromCityEvent($event) {
    this.searchValue.from = $event;
  }
  toCityEvent($event) {
    this.searchValue.to = $event;
  }
  rideDateChangeEvent($event) {
    this.searchValue.rideDate = $event;
  }
}
