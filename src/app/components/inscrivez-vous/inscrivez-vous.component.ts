import { Component } from '@angular/core';

@Component({
  selector: 'app-inscrivez-vous',
  templateUrl: './inscrivez-vous.component.html',
  styleUrl: './inscrivez-vous.component.css'
})
export class InscrivezVousComponent {

  nom: string = '';
  email: string = '';
  password:string = '';
  
  // Boolean pour afficher ou masquer le formulaire
  afficherForm: boolean = false;


  constructor() { }

  // Fonction pour afficher le formulaire
  afficherFormulaire() {
    this.afficherForm = true;
  }

  // Fonction pour créer le compte (à adapter selon votre logique)
  creerCompte() {
    // Traitement pour créer le compte ici
    // Par exemple : appel à un service Angular pour envoyer les données au backend
    // Une fois le compte créé, vous pouvez réinitialiser le formulaire et masquer le formulaire
    this.afficherForm = false;
    // Réinitialiser les valeurs des champs du formulaire si nécessaire
  }

}
