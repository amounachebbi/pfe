import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscrivezVousComponent } from '../inscrivez-vous/inscrivez-vous.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showMoreContent: boolean = false;

  toggleShowMore() {
    this.showMoreContent = !this.showMoreContent;
  }
 constructor( private router:Router){}

 goToInscrire(){
  this.router.navigate(["/Inscrivez-vous"])
 }




 goToContactPage() {
  this.router.navigateByUrl('/contact');
}
 
 

 testimonials = [
  { name: 'Alice', occupation: 'Designer', comment: 'Grande expérience avec la Formaline. Recommande fortement!', photoUrl: 'assets/img alice.jpg' },
  { name: 'Bob', occupation: 'Développeur', comment: 'Plateforme facile à utiliser, contenu incroyable. Merci!', photoUrl: 'assets/img bob.jpg' },
  { name: 'Charlie', occupation: 'étudiant', comment:' Formaline ma beaucoup aidé à apprendre. Excellente ressource !', photoUrl: 'assets/img charlie.jpg' }
];







  


  }



