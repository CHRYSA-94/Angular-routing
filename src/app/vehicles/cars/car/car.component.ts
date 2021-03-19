import { Component, Input, OnInit } from '@angular/core';
import { Car } from './Car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
@Input() inputCar: Car;


  constructor() { }

  ngOnInit(): void {
  }


}
