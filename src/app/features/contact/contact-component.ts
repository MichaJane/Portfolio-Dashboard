import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { NotificationSnackbarService } from '../../core/services/notification-snackbar.service';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ErrorStateMatcher } from '@angular/material/core';
import { IconService } from '../../core/services/icon.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'contact-component',
  standalone: false,
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent{
  submitted = true;
  contactForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private notification: NotificationSnackbarService, private iconService: IconService){
    this.contactForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', {validators: [Validators.required, Validators.maxLength(500)], updateOn: 'change'}]
    })
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

  reset(){
    this.contactForm.reset();
  }

  submit(){
    this.submitted = true;
    if(this.contactForm.invalid){
      alert('invalid!')
      this.submitted =false;
      return
    }
    alert('Success!');
    this.reset();
    this.submitted = false;
  }

  // submit(){
  //   this.submitted = true;
  //   if(this.contactForm.invalid){
  //     this.notification.showError('Failed to send message');
  //     this.submitted = false;
  //     return
  //   }

  //   const templateParams = {
  //     fullName: this.contactForm.value.fullName,
  //     email: this.contactForm.value.email,
  //     subject: this.contactForm.value.subject,
  //     message: this.contactForm.value.message,
  //   }

  //   emailjs.send(
  //     environment.emailJsServiceId, 
  //     environment.emailJsTemplateId, 
  //     templateParams, 
  //     environment.emailJsPublicKey
  //   ).then(() => {
  //     this.notification.showSuccess('Message sent successfully');
  //     this.reset();
  //   }).catch((error) => {
  //     this.notification.showError('Failed to send message');
  //   }).finally(() => this.submitted = false)
  // }
}
