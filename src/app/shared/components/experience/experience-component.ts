import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from '../../../core/models/profile-data.model';

@Component({
  selector: 'experience-component',
  standalone: false,
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  @Input() showDetails = false;
  @Input() isButtonVisible = false;
  @Input() experiences: Experience[] = [];
  @Output() viewAllClicked = new EventEmitter<void>();

  onViewAllClick(){
    this.viewAllClicked.emit();
  }
}
