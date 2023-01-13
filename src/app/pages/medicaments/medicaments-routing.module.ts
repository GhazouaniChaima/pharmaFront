import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMedicamentsComponent } from './list-medicaments/list-medicaments.component';
import { MedicamentsComponent } from './medicaments.component';

const routes: Routes = [{
  path: '',
  component: MedicamentsComponent,
  children: [
    {
      path: 'list-medicaments',
      component: ListMedicamentsComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentsRoutingModule { }

export const routedComponents = [
  MedicamentsComponent,
  ListMedicamentsComponent,
  ];
