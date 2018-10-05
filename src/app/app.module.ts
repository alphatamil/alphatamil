import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PpmComponent } from "./ppm/ppm.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavComponent } from "./home/nav/nav.component";
import { LandingComponent } from "./home/landing/landing.component";
import { DetailComponent } from "./home/detail/detail.component";
import { AboutComponent } from "./home/about/about.component";
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PpmComponent,
    PageNotFoundComponent,
    NavComponent,
    LandingComponent,
    DetailComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
