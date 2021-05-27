import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {Entry} from 'contentful';
import {Router} from '@angular/router';
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

    @Input('type') type = null;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public title = null;

    constructor(
        private router: Router,
        private contentfulService: ContentfulService,
        private breadCrumbService: BreadcrumbService
    ) { }

    // fetch data on init
    async ngOnInit() {
        this.breadCrumbService.setRouter(null);
        this.posts  = await this.contentfulService.getContent('blogPost');
        this.posts = this.filterByTags(this.posts);
        this.title = this.type === "book" ? "Bücher" : "Blog";
    }

    private filterByTags(allPosts) {
        if (this.type === "book") {
            return allPosts.filter(p => {
                return p.fields.tags.includes("buch");
            });
        }

        return allPosts;
    }

    private route(id) {
        this.router.navigate(['blog-post/', id]);
    }

    async next() {
        this.currentPageIndex = this.currentPageIndex + 2;
        this.disablePrev = false;

        let retrievedPosts  = await this.contentfulService.getContent('blogPost', this.currentPageIndex);
        retrievedPosts = this.filterByTags(retrievedPosts);

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
            this.posts = this.filterByTags(this.posts);
        }

        if (this.currentPageIndex === 0) {
            this.disablePrev = true;
        }
    }
}
