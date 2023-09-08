import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {SidebarComponent} from "./components/pieces/sidebar/sidebar.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/pieces/header/header.component';
import {FooterComponent} from './components/pieces/footer/footer.component';
import {ContactComponent} from './components/sites/contact/contact.component';
import {HomeComponent} from './components/sites/home/home.component';
import {PricesComponent} from './components/sites/prices/prices.component';
import {AestheticComponent} from './components/sites/aesthetic/aesthetic.component';
import {AboutComponent} from './components/sites/about/about.component';
import {GalleryComponent} from './components/sites/gallery/gallery.component';
import {ContactFormComponent} from './components/pieces/contact-form/contact-form.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    HomeComponent,
    PricesComponent,
    AestheticComponent,
    AboutComponent,
    GalleryComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
