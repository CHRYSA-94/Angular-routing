import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './vehicles/cars/cars.component';
import { CarComponent } from './vehicles/cars/car/car.component';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'vehicles', component: VehiclesComponent, children: [
    {path:'cars' , component: CarsComponent},
    {path:'cars/:model/:id', component: CarComponent}
    ]},
  {path:'contact', component: ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    ContactComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
