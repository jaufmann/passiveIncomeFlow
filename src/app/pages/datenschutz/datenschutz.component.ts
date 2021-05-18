import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {GenericContentfulDomManipulatorService} from '../../services/contentful/generic-contentful-dom-manipulator.service';
import {BreadcrumbService} from "../../services/breadcrumb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss'],
})
export class DatenschutzComponent implements OnInit {
  constructor(
      private contentfulService: ContentfulService,
      private genericContentfulDomManipulatorService: GenericContentfulDomManipulatorService,
      private breadCrumbService: BreadcrumbService,
      private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
  }
}
