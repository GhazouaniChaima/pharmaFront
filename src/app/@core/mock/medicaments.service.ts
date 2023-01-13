import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Medicaments } from '../data/medicaments';
import { MedicamentsData } from '../data/medicaments-data';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService extends MedicamentsData{
  private baseUrl = 'http://localhost:8080/api/Medicament';

  constructor(private httpClient: HttpClient) {
    super();
  }


 
  getMedicamentsList(): Observable<Medicaments[]> {
    return this.httpClient.get<Medicaments[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }


  saveMedicaments(data : any) : Observable<any>
  {   
     // console.warn("service ",data)
    return this.httpClient.post(this.baseUrl,data)
  }


  deleteMedicaments(id_med: any): Observable<any> {

    //console.log(id_med)
    return this.httpClient.delete(`${this.baseUrl}/${id_med}`)
  }

  updateMedicaments(id_med: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id_med}`, data)
  }

}
