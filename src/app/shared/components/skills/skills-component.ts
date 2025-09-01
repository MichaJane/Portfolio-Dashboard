import { Component, Input } from '@angular/core';
import { Skill } from '../../../core/models/profile-data.model';

@Component({
  selector: 'skills-component',
  standalone: false,
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
  @Input() view: 'chips' | 'progressBar' = 'chips';
}
