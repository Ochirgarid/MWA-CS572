import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-updateride',
  templateUrl: './updateride.component.html',
  styles: ['button{margin-top:15px}']
})
export class UpdaterideComponent implements OnInit {
  rideDetail = [{
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }];
  updateRideForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.updateRideForm = formBuilder.group({
      'from': ['', [Validators.required]],
      'to': ['', [Validators.required]],
      'seatsNum': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'carmodel': ['', [Validators.required]],
      'year': ['', [Validators.required]],
      'color': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onUpdateRide() {
    const ride = {
      from: this.updateRideForm.value.from,
      to: this.updateRideForm.value.to,
      seatsNum: this.updateRideForm.value.seatsNum,
      date: this.updateRideForm.value.date,
      car: {
        model: this.updateRideForm.value.carmodel,
        year: this.updateRideForm.value.year,
        color: this.updateRideForm.value.color
      }
    };

    //update ride details
    this.auth.updateRide(ride, (data) => {
      if (data.success) {
        this.router.navigateByUrl("/driver")
      } else {
        alert("Update not successfull. Please try again!");
        this.router.navigateByUrl("/driver");
      }
    })
  }

}
