import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ContentfulService} from '../services/contentful/contentful.service';
import {GenericContentfulDomManipulatorService} from '../services/contentful/generic-contentful-dom-manipulator.service';

@Directive({
  selector: '[appContentfulRichmedia]'
})
export class ContentfulRichmediaDirective implements OnInit{

  @Input('type') type;
  constructor(
      private elr: ElementRef,
      private contentFullService: ContentfulService,
      private genericContentfulDomManipulatorService: GenericContentfulDomManipulatorService
  ) {}

    async ngOnInit() {
        let content = null;
        switch (this.type) {
            case 'depot': content = await this.contentFullService.getDepot(); break;
            case 'datenschutz': content = await this.contentFullService.getDatenschutz(); break;
            case 'impressum': content = await this.contentFullService.getImpressum(); break;
        }

        console.log(content)
        this.elr.nativeElement.innerHTML = this.genericContentfulDomManipulatorService
            .parseContentToHTMLDomElements(content, this.type);
    }

}
