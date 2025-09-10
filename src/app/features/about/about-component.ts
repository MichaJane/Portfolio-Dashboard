import { Component, inject } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { IconService } from '../../core/services/icon.service';

@Component({
  selector: 'about-component',
  standalone: false,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {
  profileDataService = inject(ProfileDataService)
  iconService = inject(IconService);
  
  aboutMe$ = this.profileDataService.getAboutMe();
}
