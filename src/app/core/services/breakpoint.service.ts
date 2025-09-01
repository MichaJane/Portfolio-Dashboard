import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService{
  isMobile$: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver){
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
  }
}