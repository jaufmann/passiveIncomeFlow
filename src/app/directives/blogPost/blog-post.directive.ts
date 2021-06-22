import {Directive, ElementRef, Input} from '@angular/core';
import {ContentfulService} from "../../services/contentful/contentful.service";
import {GenericContentfulDomManipulatorService} from "../../services/contentful/generic-contentful-dom-manipulator.service";
import {DatePipe} from "@angular/common";

@Directive({
  selector: '[appBlogPost]'
})
export class BlogPostDirective {
    @Input('blogPostId') blogPostId;

    constructor(
        private elr: ElementRef,
        private contentFullService: ContentfulService,
        private genericContentfulDomManipulatorService: GenericContentfulDomManipulatorService
    ) {}

    async ngOnInit() {
        const content: any = await this.contentFullService.getSingleBlogPost(this.blogPostId);

        let htmlChain = this.generateBlogPostTop(content)
        htmlChain += this.genericContentfulDomManipulatorService.parseContentToHTMLDomElements(content.fields.richtext.content);
        this.elr.nativeElement.innerHTML = htmlChain;
    }

    generateBlogPostTop(content) {
        const parsedDate = new DatePipe('de').transform(content?.fields?.publishDate, 'fullDate');
        const htmlContent = `<h2>${content?.fields?.title}</h2>
                <h6>${parsedDate}</h6>
                <img src=https://${content?.fields?.heroImage?.fields?.file?.url} style="width: 100%">`;
        return htmlContent
    }

}
