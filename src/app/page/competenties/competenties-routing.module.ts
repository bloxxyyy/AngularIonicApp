import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetentiesPage } from './competenties.page';

const routes: Routes = [
  {
    path: '',
    component: CompetentiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetentiesPageRoutingModule {}
