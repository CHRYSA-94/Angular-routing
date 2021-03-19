import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars=[
    {name:"Mercedes", id: 1},
    {name:"volkswagen", id: 2},
    {name:"Toyota", id: 3}
 ]
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  openCar(){
    this.router.navigate(['car', ], {ActivatedRoute: this.route})
   }
}
