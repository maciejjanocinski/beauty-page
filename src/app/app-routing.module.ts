import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AestheticComponent} from './components/aesthetic/aesthetic.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {PricesComponent} from './components/prices/prices.component';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'o-mnie', component: AboutComponent},
  {path: 'medycyna-estetyczna', component: AestheticComponent},
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
