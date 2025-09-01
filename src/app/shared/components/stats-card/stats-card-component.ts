import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stats-card-component',
  standalone: false,
  templateUrl: './stats-card-component.html',
  styleUrl: './stats-card-component.scss',
  
})
export class StatsCardComponent {
  @Input() label = '';
  @Input() value = 0;
  @Input() icon = '';
  @Input() variant: 'dashboard' | 'projects' = 'dashboard';
}
