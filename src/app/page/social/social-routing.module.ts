import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialPage } from './social.page';
import { HeadComponent } from '../../components/head/head.component';

const routes: Routes = [
  {
    path: '',
    component: SocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialPageRoutingModule {}
