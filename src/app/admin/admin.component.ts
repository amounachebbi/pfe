import { Component } from '@angular/core';
import { FormateurService } from './formateur.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  formateurs:any[]= [];

  constructor(private formateurService: FormateurService) { } // Point à corriger

  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs() {
    this.formateurService.getFormateurs().subscribe((data: any[]) => { // Point à corriger
      console.log('Données des formateurs :', data); // Ajoutez ce console.log
      this.formateurs = data;
    });
  }

  validerFormateur(formateurId: number) {
    this.formateurService.validerFormateur(formateurId).subscribe(() => { // Point à corriger
      this.loadFormateurs();
    });
  }

  supprimerFormateur(formateurId: number) {
    this.formateurService.supprimerFormateur(formateurId).subscribe(() => { // Point à corriger
      this.loadFormateurs();
    });
  }



}

