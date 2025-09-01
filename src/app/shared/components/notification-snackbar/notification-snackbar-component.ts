import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarData } from '../../../core/services/notification-snackbar.service';

@Component({
  selector: 'notification-snackbar-component',
  standalone: false,
  templateUrl: './notification-snackbar-component.html',
  styleUrl: './notification-snackbar-component.scss'
})
export class NotificationSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData) { }
}
