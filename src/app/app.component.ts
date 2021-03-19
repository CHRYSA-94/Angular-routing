import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-exercise';

  links = [
    {path:'',label:"Home"},
    {path:'vehicles', label:"Vehicles"},
    {path:'contact', label:"Contact"}
  ]

  constructor(private router:Router){}

  ngOnInit(){
  }

  goToCurrentComponent(path){
    console.log(path)
    this.router.navigate([`${path}`])
  }
  goToPet(){

  }
}
