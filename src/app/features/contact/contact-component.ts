import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { NotificationSnackbarService } from '../../core/services/notification-snackbar.service';
import emailjs from '@emailjs/browser';
import { IconService } from '../../core/services/icon.service';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { Observable } from 'rxjs';
import { AboutMe } from '../../core/models/profile-data.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'contact-component',
  standalone: false,
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent{
  @ViewChild('f') contactFormDirective!: FormGroupDirective;
  contactForm!: FormGroup;
  submitted = false;
  contactLinks$: Observable<AboutMe>;

  constructor(
    private fb: FormBuilder, 
    private notification: NotificationSnackbarService, 
    private iconService: IconService,
    private profileDataService: ProfileDataService
  ){
    this.contactForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', {validators: [Validators.required, Validators.maxLength(500)], updateOn: 'change'}]
    })
    this.contactLinks$ = this.profileDataService.getAboutMe();
  }

  updateErrorMessage(controlName: string) {
    const control = this.contactForm.get(controlName);
    if(control?.invalid && control?.touched){
      if (control?.hasError('required')) {return 'This field is required'};
      if (control?.hasError('email')) {return 'Please enter a valid email'};
      if (control?.hasError('maxlength')) {return 'Message cannot exceed 500 characters'};
    }
    return '';
  }

  resetForm(){
    this.contactFormDirective.resetForm();
    this.submitted = false;
  }

  submit(){
    this.submitted = true;
    if(!this.contactForm.valid){
      this.notification.showError('Failed to send message');
      this.submitted = false;
      return
    }

    const templateParams = {
      fullName: this.contactForm.value.fullName,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    }

    emailjs.send(
      environment.emailJsServiceId, 
      environment.emailJsTemplateId, 
      templateParams, 
      environment.emailJsPublicKey
    ).then(() => {
      this.notification.showSuccess('Message sent successfully');
      this.resetForm();
    }).catch(() => {
      this.notification.showError('Something went wrong. Please try again.');
    })
  }
}
