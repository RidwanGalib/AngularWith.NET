import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;

  constructor(private http :HttpClient, private accountService:AccountService){

  }
  ngOnInit() {
    this.getUser();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user: User = JSON.parse(userJson);
      this.accountService.setCurrentUser(user);
    }
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
