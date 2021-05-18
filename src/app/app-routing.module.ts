import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {BlogPostsComponent} from './pages/blog-posts/blog-posts.component';
import {SingleBlogPostComponent} from './pages/single-blog-post/single-blog-post.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import {DepotComponent} from './pages/depot/depot.component';

const routes: Routes = [
    {
        path: 'footer', component: FooterComponent
    },
    {
        path: 'impressum', component: ImpressumComponent,
        data: {
            title: "Impressum"
        }
    },
    {
        path: 'datenschutz', component: DatenschutzComponent,
        data: {
            title: "Datenschutz"
        }
    },
    {
        path: 'depot', component: DepotComponent,
        data: {
            title: "Depot"
        }
    },
    {
        path: '',
        component: BlogPostsComponent,
        pathMatch: 'full',
    },
    {
        path: 'blog-post/:id',
        component: SingleBlogPostComponent,
        data: {
            title: "Blog Post"
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
