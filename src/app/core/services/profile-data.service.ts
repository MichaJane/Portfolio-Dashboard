import { Injectable } from "@angular/core";
import { AboutMe, Certification, Contact, Experience, Skill } from "../models/profile-data.model";
import { map, Observable, of } from "rxjs";
import { Stat } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})

export class ProfileDataService{
  private experiences: Experience[] =[
   {
      role: 'Frontend Developer',
      company: 'Inchcape',
      start: '2023',
      end: '2025',
      description: 'Built UI components and supported feature implementations for an automotive platform using Angular.'
    },
    {
      role: 'Wordpress Developer - Work Immersion',
      company: 'University of the East',
      start: '2023',
      end: '2023',
      description: 'Maintained and updated the CFAD website using WordPress and Elementor.'
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

  private contact: Contact = {
    email: 'faustino.michajane@gmail.com',
    linkedin: 'https://linkedin.com/in/mjane-faustino05',
    github: 'https://github.com/MichaJane'
  }

  private aboutMeData: AboutMe = {
    name: 'Michaela Faustino',
    title: 'Frontend Developer',
    bio: `I'm a Frontend developer with experience in Angular, TypeScript, and HTML/CSS. I enjoy building dynamic, responsive websites 
    and I'm particularly interested in roles related to web development. My goal is to continue growing as a developer and contribute to meaningful projects. 
    Outside coding, I spend time learning and exploring tools.`,
    skill: this.skills,
    contact: this.contact
  }

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

  getAboutMe(): Observable<AboutMe>{
    return of(this.aboutMeData);
  }
}