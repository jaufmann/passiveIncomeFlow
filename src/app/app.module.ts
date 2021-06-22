import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentfulService} from './services/contentful/contentful.service';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleBlogPostComponent } from './pages/single-blog-post/single-blog-post.component';
import { MiddleContentComponent } from './components/middle-content/middle-content.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { SideSectionComponent } from './components/side-section/side-section.component';
import { DepotComponent } from './pages/depot/depot.component';
import { ContentfulRichmediaDirective } from './directives/contentful-richmedia.directive';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { BooksComponent } from './pages/books/books.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { BlogPostDirective } from './directives/blogPost/blog-post.directive';
registerLocaleData(localeDe, localeDeExtra);


@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    HeaderComponent,
    FooterComponent,
    SingleBlogPostComponent,
    MiddleContentComponent,
    ImpressumComponent,
    DatenschutzComponent,
    SideSectionComponent,
    DepotComponent,
    ContentfulRichmediaDirective,
    BreadcrumpComponent,
    BooksComponent,
    ToolsComponent,
    BlogPostDirective
  ],
  imports: [
      BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatTableModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      MatIconModule,
      FlexLayoutModule,
  ],
  providers: [
      DatePipe,
      ContentfulService,
      { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
