import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './components/sites/contact/contact.component';
import {HomeComponent} from './components/sites/home/home.component';
import {AboutComponent} from './components/sites/about/about.component';
import {AestheticComponent} from './components/sites/aesthetic/aesthetic.component';
import {GalleryComponent} from './components/sites/gallery/gallery.component';
import {PricesComponent} from './components/sites/prices/prices.component';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'o-mnie' , component: AboutComponent},
  {path: 'zabiegi', component: AestheticComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'cennik', component: PricesComponent},
  {path: '**', redirectTo: ''}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
