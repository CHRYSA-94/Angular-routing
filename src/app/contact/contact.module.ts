import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ContactCardComponent } from "./contact-card/contact-card.component"
import { ContactComponent } from "./contact.component"

@NgModule({
  declarations:[
    ContactComponent,
    ContactCardComponent
  ],
  imports:[
    RouterModule.forChild([{path:'', component: ContactComponent}])
  ],
  exports: [RouterModule]
})

export class ContactModule {}
