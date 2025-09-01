import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar-component';
import { SharedModule } from '../../../shared/shared-module';
import { AppRoutingModule } from "../../../app-routing-module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
],
  exports:[SidebarComponent]
})
export class SidebarModule { }
