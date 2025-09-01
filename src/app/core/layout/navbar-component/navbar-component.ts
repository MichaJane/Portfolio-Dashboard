import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointService } from '../../services/breakpoint.service';
import { Observable } from 'rxjs';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {
  @Input() drawer!: MatSidenav;
  isHandset$: Observable<boolean>;
  pageTitle$: Observable<string>;

  constructor(
    private breakpointService: BreakpointService,
    private pageTitleService: PageTitleService
  ){
    this.isHandset$ = this.breakpointService.isMobile$;
    this.pageTitle$ = this.pageTitleService.pageTitle$
  }
}
