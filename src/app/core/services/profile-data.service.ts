import { Injectable } from "@angular/core";
import { Certification, Experience, Skill } from "../models/profile-data.model";
import { map, Observable, of } from "rxjs";
import { Stat } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})

export class ProfileDataService{
    private experiences: Experience[] =[
   {
      role: 'Frontend Developer',
      company: 'ABC Company',
      start: '2023',
      end: '2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut perferendis minima quas at eveniet iusto ipsam sequi, non esse maiores quam, voluptatem quia ratione veniam earum vel eligendi. Eum, eligendi.'
    },
    {
      role: 'Wordpress Developer - Work Immersion',
      company: 'XYZ Company',
      start: '2023',
      end: '2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut perferendis minima quas at eveniet iusto ipsam sequi, non esse maiores quam, voluptatem quia ratione veniam earum vel eligendi. Eum, eligendi.'
    },
  ]

   private certifications: Certification[] = [
    {
      title: 'HCIA Artificial Intelligence',
      issuer: 'Huawei',
      logo: 'assets/logos/udemy.png',
      date: '2022'
    },
    {
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      logo: 'assets/logos/udemy.png',
      date: '2023'
    },
    {
      title: 'Reactive Angular Course',
      issuer: 'Udemy',
      logo: 'assets/logos/udemy.png',
      date: '2024'
    },
    {
      title: 'Mastering TypeScript (2024 Edition)',
      issuer: 'Udemy',
      logo: 'assets/logos/udemy.png',
      date: '2025'
    },
    {
      title: 'Angular: The Complete Guide (2024 Edition)',
      issuer: 'Udemy',
      logo: 'assets/logos/udemy.png',
      date: '2025'
    }
  ]

  private skills: Skill[] = [
    { name: 'Angular', level: 60},
    { name: 'TypeScript', level: 60},
    { name: 'JavaScript', level: 60},
    { name: 'HTML5', level: 95},
    { name: 'CSS3', level: 90},
    { name: 'SCSS', level: 75},
    { name: 'Bootstrap', level: 70},
  ]

  constructor(){}

  getExperience(): Observable<Experience[]>{
    return of(this.experiences);
  }

  getExperienceStat(): Observable<Stat>{
    return this.getExperience().pipe(
      map((experiences) => ({
        label: 'Work Experiences',
        value: experiences.length
      }))
    )
  }

  getCertifications(): Observable<Certification[]>{
    return of(this.certifications).pipe(
      map((certs) => certs.sort((a, b) => parseInt(b.date) - parseInt(a.date)))
    );
  }

  getSkills(): Observable<Skill[]>{
    return of(this.skills);
  }

  getSkillsStat(): Observable<Stat>{
    return this.getSkills().pipe(
      map((skills) => ({
        label: 'Total Skills',
        value: skills.length
      }))
    )
  }
}