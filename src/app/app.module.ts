import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{
  path: '', component: HeroesComponent

},
  {
    path: 'heroes', component: HeroesComponent
  
}];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    // {provide: 'googleTagManagerId',  useValue: 'GTM-WVZCGXR'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
