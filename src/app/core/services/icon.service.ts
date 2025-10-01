import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconService{

  private icons = ['gmail', 'linkedin', 'github', 'udemy', 'cisco', 'huawei', 'ribbon'];

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer
  ){
    this.icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/svg/${icon}.svg`)
      )
    })
  }
}