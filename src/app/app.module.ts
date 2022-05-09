import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
imports: [BrowserModule, FormsModule, AppRoutingModule];
import { FormsModule } from '@angular/forms';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreAddComponent } from './offre-add/offre-add.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffreListComponent,
    OffreAddComponent,
    UpdateOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
