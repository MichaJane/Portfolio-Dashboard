import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects-component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared-module";

const routes: Routes = [
  { path: '', component: ProjectsComponent }
];

@NgModule({
  declarations:[ProjectsComponent],
  imports:[
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class ProjectsModule{}