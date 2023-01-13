import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { MedicamentsData } from '../../../@core/data/medicaments-data';

@Component({
  selector: 'ngx-list-medicaments',
  templateUrl: './list-medicaments.component.html',
  styleUrls: ['./list-medicaments.component.scss']
})
export class ListMedicamentsComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

 
    columns: {
      // id_med: {
      //     title: 'id_med',
      //     type: 'number',
      //   },
      nom_commercial: {
        title: 'Nom Commercial',
        type: 'string',
      },
      dci: {
        title: 'DCI',
        type: 'string',
      },
      dossage: {
        title: 'Dossage',
        type: 'string',
      },
      nbre_stock: {
        title: 'Nombre de stock',
        type: 'number',
      },
      prix: {
        title: 'Prix',
        type: 'number',
      },
      presentaion: {
        title: 'Presentaion',
        type: 'string',
      },
  
    
    },
  
    };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: MedicamentsData) {
    this.service.getMedicamentsList().subscribe(

      data => {
        console.log(data);
        this.source.load(data);
      }
    )

  }

  onCreateConfirm(event) : void{
      this.saveMedicaments(event);
      event.confirm.resolve(event.newData);
  }


  onDeleteConfirm(event): void {
    console.log(event.data.id_med);
    if (window.confirm('Êtes-vous sûr que vous voulez supprimer cette catégorie?')) {
      this.deleteMedicaments(event.data.id_med);
      event.confirm.resolve();

    } else {
      event.confirm.reject();
    }
  }


  onEditConfirm(event): void {
   if (window.confirm('Êtes-vous sûr de vouloir enregistrer ?')) {
      //call to remote api, remember that you have to await this
      this.updateMedicaments(event.data.id_med, event);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  //Functions//

  saveMedicaments(event: any){
    this.service.saveMedicaments(event.newData).
    subscribe((result)=> console.warn("reslt is here",result))
  }

  updateMedicaments(id_med: any, event: any) {
    this.service.updateMedicaments(id_med, event.newData).
      subscribe((result) => { console.warn(result) })
  }


  deleteMedicaments(id_med: any) {

    this.service.deleteMedicaments(id_med).subscribe((result) => {
      console.warn("result", result)
    })
  }
}

