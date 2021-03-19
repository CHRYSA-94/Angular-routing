import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  openCars(){
    this.router.navigate(["cars"], {relativeTo: this.route})
  }
}
