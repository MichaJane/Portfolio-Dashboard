import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointService } from '../../services/breakpoint.service';
import { take } from 'rxjs';

@Component({
  selector: 'sidebar',
  standalone: false,
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss'
})
export class SidebarComponent {
  @Input() drawer!: MatSidenav;
  sidenavItems = [
    {label: 'Dashboard', link: '/dashboard', icon: 'dashboard'},
    {label: 'About', link: '/about', icon: 'person'},
    {label: 'Projects', link: '/projects', icon: 'work'},
    {label: 'Contact', link: '/contact', icon: 'mail'},
  ]

  constructor(private breakpoint: BreakpointService){}

  closeSidenav() {
    this.breakpoint.isMobile$.pipe(take(1)).subscribe(() => {
      this.drawer.close();
    })
  }
}
