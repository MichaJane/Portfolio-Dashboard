import { NgModule } from "@angular/core";
import { AboutComponent } from "./about-component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared-module";
import { AboutSummaryComponent } from './about-summary/about-summary-component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations:[AboutComponent, AboutSummaryComponent],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})

export class AboutModule{}