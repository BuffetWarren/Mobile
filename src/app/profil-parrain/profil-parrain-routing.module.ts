import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilParrainPage } from './profil-parrain.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilParrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilParrainPageRoutingModule {}
