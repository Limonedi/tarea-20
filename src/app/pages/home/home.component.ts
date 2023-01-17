import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any = [];
  name1= 'Shakira';
  showData: boolean =false;
  constructor( private getUsers:ApiService ){}


  ngOnInit(): void {
    this.getUsers.getView().subscribe(
      res => {
        console.log(res)
        this.users = res;
      }, err => {
        console.log('error')
      }
      );
  }
  
}
