import { Component } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { Observable } from 'rxjs';
import { AboutMe } from '../../core/models/profile-data.model';
import { IconService } from '../../core/services/icon.service';

@Component({
  selector: 'about-component',
  standalone: false,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {
  aboutMe$: Observable<AboutMe>;

  constructor(private profileDataService: ProfileDataService, private iconService: IconService){
    this.aboutMe$ = this.profileDataService.getAboutMe();
  }
}
