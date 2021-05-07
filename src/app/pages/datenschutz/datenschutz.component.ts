import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {GenericContentfulDomManipulatorService} from '../../services/contentful/generic-contentful-dom-manipulator.service';

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss'],
})
export class DatenschutzComponent implements OnInit {
  constructor(
      private contentfulService: ContentfulService,
      private genericContentfulDomManipulatorService: GenericContentfulDomManipulatorService
  ) { }

  async ngOnInit() {
      const datenschutz = await this.contentfulService.getDatenschutz();
      const container = document.getElementById('container');
      container.innerHTML = this.genericContentfulDomManipulatorService.parseContentToHTMLDomElements(datenschutz, 'datenschutz');
  }
}
