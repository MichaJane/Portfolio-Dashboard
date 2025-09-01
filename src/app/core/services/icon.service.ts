import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconService{
  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'gmail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/gmail.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/linkedin.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/github.svg')
    )
  }
}