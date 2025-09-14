import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Project, ProjectStatus } from "../models/project.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  readonly projectStatus = ProjectStatus;
  private baseUrl = environment.baseUrl;

  http = inject(HttpClient);

  projects$ = this.http.get<Project[]>(`${this.baseUrl}/projects`);

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