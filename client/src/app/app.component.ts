import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  candidates: any
  constructor(private http: HttpClient)
  {
    this.candidates = this.http.get("http://localhost:4200/api/user/all");
  }
}
