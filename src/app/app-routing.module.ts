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
        path: 'impressum', component: ImpressumComponent
    },
    {
        path: 'datenschutz', component: DatenschutzComponent
    },
    {
        path: 'depot', component: DepotComponent
    },
    {
        path: '',
        component: BlogPostsComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog-post/:id',
        component: SingleBlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
