import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "../../services/breadcrumb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor(
      private breadCrumbService: BreadcrumbService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
  }

}
