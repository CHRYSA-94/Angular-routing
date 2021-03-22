import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { HomeComponent } from "./home.component"
import { WelcomeComponent } from "./welcome/welcome.component"

@NgModule({
  declarations:[
    HomeComponent,
    WelcomeComponent
  ],
  imports:[
    RouterModule.forChild([{path:'', component: HomeComponent}])
  ],
  exports: [RouterModule]
})

export class HomeModule {}
