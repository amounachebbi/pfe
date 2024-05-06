import { Component } from '@angular/core';
import { FileDownloadService } from '../file-download.service';


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrl: './formateurs.component.css'
})
export class FormateursComponent {
  message = "merci de vos attente nos réponse.";

  constructor(private fileDownloadService: FileDownloadService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileDownloadService.downloadFile(file);
  }
 







}








