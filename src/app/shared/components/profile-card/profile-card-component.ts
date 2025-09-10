import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'profile-card-component',
  standalone: false,
  templateUrl: './profile-card-component.html',
  styleUrl: './profile-card-component.scss',
})
export class ProfileCardComponent {
  @ContentChild('card-actions') cardActions!: ElementRef;
  @Input() icon? = '';
  @Input() title = '';
  @Input() showButton? = false;
  @Input() showCardActions? = false;
  @Output() viewAllClicked = new EventEmitter<void>();

  onViewAllClick(){
    this.viewAllClicked.emit();
  }
}
