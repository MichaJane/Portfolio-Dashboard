import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { inject, Injectable } from "@angular/core";
import { map, shareReplay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService{
  breakpointObserver = inject(BreakpointObserver)
  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
  .pipe(
    map(result => result.matches),
    shareReplay()
  )
}