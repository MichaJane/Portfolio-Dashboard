import { Component } from '@angular/core';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { Observable } from 'rxjs';
import { Certification, Experience } from '../../../core/models/profile-data.model';

@Component({
  selector: 'about-summary-component',
  standalone: false,
  templateUrl: './about-summary-component.html',
  styleUrl: './about-summary-component.scss'
})
export class AboutSummaryComponent {
  experience$: Observable<Experience[]>;
  certifications$: Observable<Certification[]>;
  
  constructor(private profileDataService: ProfileDataService){
    this.experience$ = this.profileDataService.getExperience();
    this.certifications$ = this.profileDataService.getCertifications();
  }
}
