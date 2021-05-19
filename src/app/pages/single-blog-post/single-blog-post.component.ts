import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'app-single-blog-post',
  templateUrl: './single-blog-post.component.html',
  styleUrls: ['./single-blog-post.component.scss']
})
export class SingleBlogPostComponent implements OnInit {

    blogPost;

  constructor(
      private route: ActivatedRoute,
      private contentfulService: ContentfulService,
      private activatedRoute: ActivatedRoute,
      private breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
      this.breadCrumbService.setRouter(this.activatedRoute.snapshot);
      this.route.params.subscribe(async params => {
          const id = params.id;
          this.blogPost  = await this.contentfulService.getSingleBlogPost(id);
      });
  }
}
