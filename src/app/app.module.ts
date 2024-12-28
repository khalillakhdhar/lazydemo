import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ExplicationComponent } from './explication/explication.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ExplicationComponent,
    IntrouvableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
