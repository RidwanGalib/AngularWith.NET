import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;

  constructor(private http :HttpClient){

  }
  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.http.get('http://localhost:34815/api/Users').subscribe(response=>{
      this.users=response
    },
    error=>{
      console.log(error);
    }
  );
  }
}
