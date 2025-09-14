import { Component, inject } from '@angular/core';
import { BreakpointService } from '../services/breakpoint.service';
import { ProfileDataService } from '../services/profile-data.service';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  pageTitle = '';
  
  isHandset$ = inject(BreakpointService).isMobile$;
  aboutMe$ = inject(ProfileDataService).aboutMe$;
  iconService = inject(IconService);
}
