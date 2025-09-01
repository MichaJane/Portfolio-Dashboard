import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
        data: {title: 'Dashboard'}
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects-module').then(m => m.ProjectsModule),
        data: {title: 'Projects'}
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about-module').then(m => m.AboutModule),
        data: {title: 'About'}
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact-module').then(m => m.ContactModule),
        data: {title: 'Contact'}
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
