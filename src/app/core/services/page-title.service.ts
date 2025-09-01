import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService{
  private _pageTitle = new BehaviorSubject<string>('');
  pageTitle$ = this._pageTitle.asObservable();

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private titleService: Title
  )
  {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.setPageTitle(this.activateRoute)),
    )
    .subscribe(data => {
      this.titleService.setTitle(data);
      this._pageTitle.next(data);
    })
  }
  
  private setPageTitle(activatedRoute: ActivatedRoute) {
    let child = activatedRoute.firstChild;
    while (child?.firstChild) {
      child = child.firstChild;
    }
    return child?.snapshot.data['title'] || '';
  }
}