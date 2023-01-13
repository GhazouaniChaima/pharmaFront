export class Medicaments {
    id_med : number ;
    nom_commercial: string ;
    dci: string ;
    dossage: string ;
    nbre_stock: number  ;
    prix: number ;
    presentaion: string;

  
  
    constructor(nom_commercial: string, dci: string , dossage: string,nbre_stock: number,prix : number , presentaion:string)
        {
            this.nom_commercial=nom_commercial ;
            this.dci =dci ;
            this.dossage=dossage ;
            this.nbre_stock=nbre_stock  ;
            this.prix= prix ;
            this.presentaion=presentaion;
        
        }
}

