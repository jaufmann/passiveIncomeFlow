import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  public depot = null;

  constructor(
      private activatedRoute: ActivatedRoute,
      private breadCrumbService: BreadcrumbService
  ) { }

  async ngOnInit() {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
  }

}
