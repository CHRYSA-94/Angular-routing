import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import { HomeModule } from './home/home.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ContactModule } from './contact/contact.module';


const appRoutes: Routes =[
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomeModule)
  },
  { path: "vehicles",
    loadChildren: () =>
      import("./vehicles/vehicles.module").then(m => m.VehiclesModule)
  },
  { path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then(m => m.ContactModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    HomeModule,
    VehiclesModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
