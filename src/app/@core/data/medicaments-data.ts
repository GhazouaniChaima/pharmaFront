import { Observable } from "rxjs";
import { Medicaments } from "./medicaments";
export abstract class MedicamentsData {
    abstract getMedicamentsList(): Observable<Medicaments[]>;
    abstract deleteMedicaments(id_med: any) : Observable<any> ;
    abstract updateMedicaments(id_med : any , data : any): Observable<any>;
    abstract saveMedicaments(data : any) : Observable<any>
}





