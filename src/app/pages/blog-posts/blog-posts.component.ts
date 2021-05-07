import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ContentfulService} from '../../services/contentful/contentful.service';
import {Entry} from 'contentful';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-page',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['position'];
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

    public posts: Entry<any>[] = [];

    public image = null;
    private currentPageIndex = 0;
    public disableNext = false;
    public disablePrev = true;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private router: Router,
        private contentfulService: ContentfulService
    ) { }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // fetch data on init
    async ngOnInit() {
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
