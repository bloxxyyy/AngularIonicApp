import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetentiesPageRoutingModule } from './competenties-routing.module';

import { CompetentiesPage } from './competenties.page';
import { SocialFabModule } from '../../components/social-fab/social.module';
import { HeadModule } from '../../components/head/head.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetentiesPageRoutingModule,
    HeadModule,
    SocialFabModule
  ],
  declarations: [
    CompetentiesPage
  ]
})
export class SocialPageModule {}
