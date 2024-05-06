import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private apiUrl = 'http://example.com/api/formateurs';
  constructor(private http: HttpClient) { }
  getFormateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  validerFormateur(formateurId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${formateurId}/valider`, null);
  }

  supprimerFormateur(formateurId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${formateurId}`);
  }


}
