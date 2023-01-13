import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentsRoutingModule,routedComponents } from './medicaments-routing.module';
import { ListMedicamentsComponent } from './list-medicaments/list-medicaments.component';
import { MedicamentsComponent } from './medicaments.component';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [...routedComponents,ListMedicamentsComponent, MedicamentsComponent,routedComponents],
  imports: [
    CommonModule,
    MedicamentsRoutingModule,

    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,

  ],
})
export class MedicamentsModule { }
