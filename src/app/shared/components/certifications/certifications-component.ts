import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Certification } from '../../../core/models/profile-data.model';

@Component({
  selector: 'certifications-component',
  standalone: false,
  templateUrl: './certifications-component.html',
  styleUrl: './certifications-component.scss',
})
export class CertificationsComponent {
  @Input() certifications: Certification[] = [];
  @Input() isButtonVisible = false;
  @Output() viewAction = new EventEmitter<void>();

  onCardViewClicked(){
    this.viewAction.emit();
  }
}
