import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { AppRoutingModule } from '../app-routing-module';
import { NavbarModule } from './layout/navbar-component/navbar-module';
import { SidebarModule } from './layout/sidebar-component/sidebar-module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule,
    RouterModule,
    SharedModule
  ],
  exports:[Layout]
})
export class CoreModule { }
