import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country.service';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    SinglecountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'home',component:HomeComponent },
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'region/:name',component:CountryComponent},
      {path:'name/:name',component:SinglecountryComponent},
      { path: 'country/:currencyCode',pathMatch: 'full', component: CountryComponent },
      { path: 'country/:languageCode',pathMatch: 'full', component: CountryComponent }
    ],{useHash: true})
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
