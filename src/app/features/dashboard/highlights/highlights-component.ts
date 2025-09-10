import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDataService } from '../../../core/services/profile-data.service';
@Component({
  selector: 'highlights-component',
  standalone: false,
  templateUrl: './highlights-component.html',
  styleUrl: './highlights-component.scss'
})
export class HighlightsComponent {
  router = inject(Router);
  profileDataService = inject(ProfileDataService);

  experience$ = this.profileDataService.getExperience();
  certifications$ = this.profileDataService.getCertifications();
  skills$ = this.profileDataService.getSkills();
  
  navigateToAbout(){
    this.router.navigate(['/about']);
  }
}
