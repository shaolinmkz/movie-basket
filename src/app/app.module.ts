import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeroComponent } from 'src/app/hero/hero.component';
import { TopNavComponent } from 'src/app/top-nav/top-nav.component';
import { MovieCardComponent } from 'src/app/movie-card/movie-card.component';
import { SingleViewComponent } from 'src/app/single-view/single-view.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { VideoFrameComponent } from 'src/app/video-frame/video-frame.component';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopNavComponent,
    MovieCardComponent,
    SingleViewComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    VideoFrameComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
