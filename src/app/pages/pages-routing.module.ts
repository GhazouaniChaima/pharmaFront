import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { UpdateUserComponent } from './dashboard/users/update-user/update-user.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
 
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'addUser',
      component: AddUserComponent,
    },
    {
      path: 'updateUser/:id',
      component: UpdateUserComponent,
    },
   
  
    
    {
      path: 'medicaments',
      loadChildren: () => import('./medicaments/medicaments.module')
        .then(m => m.MedicamentsModule),
    },
   
  
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
