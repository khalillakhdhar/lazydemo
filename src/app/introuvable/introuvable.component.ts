import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introuvable',
  standalone: false,

  templateUrl: './introuvable.component.html',
  styleUrl: './introuvable.component.css'
})
export class IntrouvableComponent {
constructor(private router:Router) { }
retourAccueil(){
  this.router.navigate(["../accueil"]);
}
}
