import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentfulService} from '../../services/contentful/contentful.service';

@Component({
  selector: 'app-single-blog-post',
  templateUrl: './single-blog-post.component.html',
  styleUrls: ['./single-blog-post.component.scss']
})
export class SingleBlogPostComponent implements OnInit {

    blogPost;

  constructor(
      private route: ActivatedRoute,
      private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(async params => {
          const id = params.id; // (+) converts string 'id' to a number

          this.blogPost  = await this.contentfulService.getSingleBlogPost(id);

          console.log("fsdfsdfsfsf", this.blogPost);
      });
  }
}
