import { Component, inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointService } from '../../services/breakpoint.service';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {
  @Input() drawer!: MatSidenav;

  isHandset$ = inject(BreakpointService).isMobile$;
  pageTitle$ = inject(PageTitleService).pageTitle$;
}
