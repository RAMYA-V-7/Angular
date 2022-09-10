import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  public api1:any=[];
  public albumid:number=0;
  constructor(private api:ApiService) { }
  ngOnInit(){
    this.api.getData().subscribe(data => this.api1=data);
  }
}