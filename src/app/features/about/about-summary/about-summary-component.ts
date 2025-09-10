import { Component, inject } from '@angular/core';
import { ProfileDataService } from '../../../core/services/profile-data.service';

@Component({
  selector: 'about-summary-component',
  standalone: false,
  templateUrl: './about-summary-component.html',
  styleUrl: './about-summary-component.scss'
})
export class AboutSummaryComponent {
  profileDataService = inject(ProfileDataService);
  experience$ = this.profileDataService.getExperience();
  certifications$ = this.profileDataService.getCertifications();
}
