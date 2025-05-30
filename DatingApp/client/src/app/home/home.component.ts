import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  registerMode=false;
  users:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }
  cancelRegisterMode(event:boolean){
    this.registerMode=event;
  }
}
