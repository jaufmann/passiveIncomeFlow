import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ActivatedRouteSnapshot, RouterEvent} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private router: BehaviorSubject<ActivatedRouteSnapshot> = new BehaviorSubject(null);

  constructor() { }

  getRouter() {
      return this.router.asObservable();
  }

  setRouter(activatedRouteSnapshot: ActivatedRouteSnapshot) {
      this.router.next(activatedRouteSnapshot);
  }


}
