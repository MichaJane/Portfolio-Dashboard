import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Stat } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  getGithubStat(): Observable<Stat>{
    return of({label: 'Github Repo', value: 0});
  }
}