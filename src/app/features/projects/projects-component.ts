import { Component } from '@angular/core';
import { Project, ProjectStat, ProjectStatus, Stat } from '../../core/models/project.model';
import { Observable } from 'rxjs';
import { ProjectService } from '../../core/services/project.services';

@Component({
  selector: 'projects-component',
  standalone: false,
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss'
})
export class ProjectsComponent {
  projectStatus = ProjectStatus;

  projects$: Observable<Project[]>;
  projectStats$: Observable<Stat[]>;
  inProgress$: Observable<Project[]>;
  completed$: Observable<Project[]>;
  upcoming$: Observable<Project[]>;
  
  constructor(private projectService: ProjectService){
    this.projects$ = this.projectService.projects$;
    this.projectStats$ = this.projectService.projectStats$;
    this.inProgress$ = this.projectService.getProjectsByStatus(this.projectStatus.InProgress);
    this.completed$ = this.projectService.getProjectsByStatus(this.projectStatus.Completed);
    this.upcoming$ = this.projectService.getProjectsByStatus(this.projectStatus.Upcoming);
  }
}
