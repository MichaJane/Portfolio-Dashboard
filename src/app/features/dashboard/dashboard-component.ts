import { Component } from '@angular/core';
import { ProjectService } from '../../core/services/project.services';
import { combineLatest, map, Observable } from 'rxjs';
import { Stat } from '../../core/models/project.model';
import { DashboardService } from '../../core/services/dashboard.service';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  standalone: false,
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss'
})
export class DashboardComponent {
  roles = [
    'Frontend developer', 
    'Angular Developer', 
    'Web developer', 
    'Aspiring Fullstack developer'
  ]

  dashboardStats$: Observable<Stat[]>;

  constructor(
    private dashboardService: DashboardService, 
    private projectService: ProjectService,
    private profileDataService: ProfileDataService,
    private router: Router
  ){
   this.dashboardStats$ = combineLatest([
      this.projectService.projectStats$,
      this.profileDataService.getSkillsStat(),
      this.profileDataService.getExperienceStat(),
      this.dashboardService.getGithubStat(),
    ]).pipe(
      map(([projectStats, skillsStat, experienceStat, dashboardStats]) => {
        const finalStats = []
        const totalProjectsStat = projectStats.find(stat => stat.label === 'Total Projects');
        if (totalProjectsStat) {
          finalStats.push(totalProjectsStat);
        }
        finalStats.push(skillsStat, experienceStat, dashboardStats)
        return finalStats;
      })
    );
  }

  navigateToProjects(){
    this.router.navigate(['/projects']);
  }
  navigateToContact(){
    this.router.navigate(['/contact']);
  }
}
