import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { NotificationSnackbarComponent } from "../../shared/components/notification-snackbar/notification-snackbar-component";

export enum SnackbarType{
  Success = 'success',
  Error = 'error'
}

export interface SnackbarData{
  type: SnackbarType;
  message: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationSnackbarService{
  constructor(private snackbar: MatSnackBar){}

  showSuccess(message: string){
    this.showSnackbar({
      message: message,
      type: SnackbarType.Success,
      icon: 'check_circle'
    })
  }

  showError(message: string){
    this.showSnackbar({
      message: message,
      type: SnackbarType.Error,
      icon: 'error'
    })
  }

  private showSnackbar(
    data: SnackbarData, 
    duration: number = 4000, 
    horizontalPosition: MatSnackBarHorizontalPosition = 'right', 
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  )
  {
    this.snackbar.openFromComponent(NotificationSnackbarComponent, {
      data,
      duration,
      horizontalPosition,
      verticalPosition,
      panelClass: [`snackbar-${data.type}`]
    })
  }
}