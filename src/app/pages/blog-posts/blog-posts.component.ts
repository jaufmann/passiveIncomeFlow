import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {Entry} from 'contentful';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'app-page',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})

export class BlogPostsComponent implements OnInit {
    public posts: Entry<any>[] = [];

    public image = null;
    private currentPageIndex = 0;
    public disableNext = false;
    public disablePrev = true;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private router: Router,
        private contentfulService: ContentfulService,
        private breadCrumbService: BreadcrumbService
    ) { }

    // fetch data on init
    async ngOnInit() {
        this.breadCrumbService.setRouter(null);
        this.posts  = await this.contentfulService.getContent('blogPost');
    }

    private route(id) {
        this.router.navigate(['blog-post/', id]);
    }

    async next() {
        this.currentPageIndex = this.currentPageIndex + 2;
        this.disablePrev = false;

        const retrievedPosts  = await this.contentfulService.getContent('blogPost', this.currentPageIndex);

        if (retrievedPosts.length === 0) {
            this.disableNext = true;
        } else {
            this.posts = retrievedPosts;
        }
    }

    async prev() {
        this.currentPageIndex = this.currentPageIndex - 2;
        this.disableNext = false;
        if (this.currentPageIndex >= 0) {
            this.posts  = await this.contentfulService.getContent('blogPost', this.currentPageIndex);
        }

        if (this.currentPageIndex === 0) {
            this.disablePrev = true;
        }
    }
}
