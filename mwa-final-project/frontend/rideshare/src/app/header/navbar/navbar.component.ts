import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  constructor( private authService: AuthService, private router: Router) {
  }

  public get user(): boolean {
    return this.authService.isLoggedIn;
  }
  ngOnInit(): void {

  }


  logout() {
    this.authService.logout();
    this.authService.setLoggedIn(false);
    this.router.navigateByUrl('/login');
    //alert("you are logged out")
    return false
  }
}
