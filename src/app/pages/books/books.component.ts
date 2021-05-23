import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "../../services/breadcrumb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
      private breadCrumbService: BreadcrumbService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
  }

}
