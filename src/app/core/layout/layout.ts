import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, shareReplay, tap } from 'rxjs';
import { BreakpointService } from '../services/breakpoint.service';

@Component({
  selector: 'layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  pageTitle = '';
  isHandset$: Observable<boolean>

  constructor(
    private breakpointService: BreakpointService
  ) 
  {
    this.isHandset$ = this.breakpointService.isMobile$;
  }
}
