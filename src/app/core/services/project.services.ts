import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import { Project, ProjectStatus } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  projectStatus = ProjectStatus;

  private projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio dashboard website built using Angular',
      status: this.projectStatus.InProgress,
      liveUrl: 'https://portfolio-dashboard-v1.netlify.app',
      codeUrl: 'https://github.com/MichaJane/Portfolio-Dashboard.git'
    },
      {
      title: 'Camping Website',
      description: 'A responsive website for camping enthusiasts',
      status: this.projectStatus.Upcoming,
    },
    {
      title: 'To Do list App',
      description: 'HTML, CSS, VUE.JS',
      status: this.projectStatus.Upcoming,
    },
    {
      title: 'Business Website',
      description: 'A responsive website for business',
      status: this.projectStatus.Upcoming,
    },
    {
      title: 'TaskBoard',
      description: 'A mini task management website built using Angular',
      status: this.projectStatus.InProgress,
      codeUrl: 'https://github.com/MichaJane/task-board.git'
    }
  ];

  private _projects = new BehaviorSubject<Project[]>(this.projects);
  
  projects$ = this._projects.asObservable();

  projectStats$ = this.projects$.pipe(
    map((projects) => {
     return [
      { label: 'Total Projects', value: projects.length},
      { label: 'In Progress', value: projects.filter(p => p.status === ProjectStatus.InProgress).length },
      { label: 'Completed', value: projects.filter(p => p.status === ProjectStatus.Completed).length },
      { label: 'Upcoming', value: projects.filter(p => p.status === ProjectStatus.Upcoming).length },
    ]
    })
  )

  getProjectsByStatus(status: ProjectStatus): Observable<Project[]>{
    return this.projects$.pipe(
      map((projects) => projects.filter((project) => project.status === status))
    )
  }
}