import { NgModule } from "@angular/core";
import { MaterialModule } from "./material-module";
import { StatsCardComponent } from "./components/stats-card/stats-card-component";
import { CommonModule } from "@angular/common";
import { ProfileCardComponent } from "./components/profile-card/profile-card-component";
import { CertificationsComponent } from "./components/certifications/certifications-component";
import { ExperienceComponent } from "./components/experience/experience-component";
import { SkillsComponent } from "./components/skills/skills-component";
import { NotificationSnackbarComponent } from "./components/notification-snackbar/notification-snackbar-component";

@NgModule({
  declarations: [StatsCardComponent, ProfileCardComponent, CertificationsComponent, ExperienceComponent, SkillsComponent, NotificationSnackbarComponent],
  imports: [CommonModule, MaterialModule],
  exports:[MaterialModule, StatsCardComponent, ProfileCardComponent, CertificationsComponent, ExperienceComponent, SkillsComponent, NotificationSnackbarComponent]
})

export class SharedModule{}