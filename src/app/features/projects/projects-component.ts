import { Component, inject } from '@angular/core';
import { ProjectStatus } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.services';

@Component({
  selector: 'projects-component',
  standalone: false,
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss'
})
export class ProjectsComponent {
  readonly projectStatus = ProjectStatus;

  projectService = inject(ProjectService);
  
  projects$ = this.projectService.projects$;
  projectStats$ = this.projectService.projectStats$;
  inProgress$ = this.projectService.getProjectsByStatus(this.projectStatus.InProgress);
  completed$ = this.projectService.getProjectsByStatus(this.projectStatus.Completed);
  upcoming$ = this.projectService.getProjectsByStatus(this.projectStatus.Upcoming);
}
