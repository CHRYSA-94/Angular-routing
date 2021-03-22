import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule, Routes } from "@angular/router";
import { CarComponent } from "./cars/car/car.component";
import { CarsComponent } from "./cars/cars.component";
import { VehiclesComponent } from "./vehicles.component";



const routes: Routes=[
  {path:'', component: VehiclesComponent, children: [
    {path:'cars' , component: CarsComponent},
    {path:'cars/:model/:id', component: CarComponent}
    ]}
]

@NgModule({
  declarations: [
  VehiclesComponent,
  CarsComponent,
  CarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})

export class VehiclesModule {}
