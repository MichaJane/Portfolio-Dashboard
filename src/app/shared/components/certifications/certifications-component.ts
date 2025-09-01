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
  @Output() viewAllClicked = new EventEmitter<void>();

  onViewAllClick(){
    this.viewAllClicked.emit();
  }
}
