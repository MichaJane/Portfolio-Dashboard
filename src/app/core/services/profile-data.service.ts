import { inject, Injectable } from "@angular/core";
import { AboutMe, Certification, Contact, Experience, Skill } from "../models/profile-data.model";
import { map, Observable, of } from "rxjs";
import { Stat } from "../models/project.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProfileDataService{
  private baseUrl = environment.baseUrl;

  http = inject(HttpClient);

  aboutMe$ = this.http.get<AboutMe>(`${this.baseUrl}/aboutMe`);

  getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.baseUrl}/experiences`);
  }

  getExperienceStat(): Observable<Stat>{
    return this.getExperience().pipe(
      map((experiences) => ({
        label: 'Work Experiences',
        value: experiences.length,
      }))
    )
  }

  getCertifications(): Observable<Certification[]>{
    return this.http.get<Certification[]>(`${this.baseUrl}/certifications`).pipe(
      map((certs) => certs.sort((a, b) => parseInt(b.date) - parseInt(a.date)))
    );
  }

  getSkills(): Observable<Skill[]>{
    return this.aboutMe$.pipe(map((about) => about.skills))
  }

  getSkillsStat(): Observable<Stat>{
    return this.getSkills().pipe(
      map((skills) => ({
        label: 'Total Skills',
        value: skills.length,
      }))
    )
  }
}