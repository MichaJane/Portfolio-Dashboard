import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Certification, Experience, Skill } from '../../../core/models/profile-data.model';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'highlights-component',
  standalone: false,
  templateUrl: './highlights-component.html',
  styleUrl: './highlights-component.scss'
})
export class HighlightsComponent {
  experience$: Observable<Experience[]>;
  certifications$: Observable<Certification[]>;
  skills$: Observable<Skill[]>;

  constructor(private router: Router, private profileDataService: ProfileDataService){
    this.experience$ = this.profileDataService.getExperience();
    this.certifications$ = this.profileDataService.getCertifications();
    this.skills$ = this.profileDataService.getSkills();
  }
  
  navigateToAbout(){
    this.router.navigate(['/about']);
  }

}
