import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact-component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared-module";

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations:[ContactComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})

export class ContactModule{}