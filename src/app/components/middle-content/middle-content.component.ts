import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../../services/contentful/contentful.service";

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
export class MiddleContentComponent implements OnInit {

  income: any = null;
  constructor(
      private contentFullService: ContentfulService
  ) { }

  async ngOnInit() {
      this.income = (await this.contentFullService.getDividendYear()).fields;
      console.log('----', this.income)
  }

}
