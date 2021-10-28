import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http: HttpClient) { }

  sendSignupRequest() {
    return this.http.get('http://localhost:3000')
  }

}
