import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ExplicationComponent } from './explication/explication.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';

const routes: Routes = [
  {
    path:"",redirectTo:"accueil",pathMatch:"full"
  },
  {
    path:"accueil",component:AccueilComponent
  },
  {
    path:"explication",component:ExplicationComponent
  },
  {
    path:"**",component:IntrouvableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
