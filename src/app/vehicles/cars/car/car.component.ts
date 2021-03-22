import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from './Car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

car: {name: string, id: number}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.car ={
      name: this.route.snapshot.params['model'],
      id: this.route.snapshot.params['id']
    }

  }


}
