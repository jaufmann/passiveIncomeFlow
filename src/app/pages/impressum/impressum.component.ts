import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "../../services/breadcrumb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor(private breadCrumbService: BreadcrumbService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
  }

}
