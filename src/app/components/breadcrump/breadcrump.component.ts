import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterEvent} from "@angular/router";
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss']
})
export class BreadcrumpComponent implements OnInit {

  private currentRouteName = null;
  constructor(private breadCrumbService: BreadcrumbService) { }

  ngOnInit(): void {
      this.breadCrumbService.getRouter().subscribe(r => {
          if (r && r.data) {
              this.currentRouteName = r.data.title;
          } else {
              this.currentRouteName = null;
          }
          console.log("Breadcrumb", r);
      })
  }

}
