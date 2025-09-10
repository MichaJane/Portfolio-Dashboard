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
  @Input() experiences: Experience[] = [];
  @Input() isButtonVisible = false;
  @Output() viewAction = new EventEmitter<void>();

  onCardViewClicked(){
    this.viewAction.emit();
  }
}
