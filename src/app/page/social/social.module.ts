import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';
import { SocialFabModule } from '../../components/social-fab/social.module';
import { HeadModule } from '../../components/head/head.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule,
    HeadModule,
    SocialFabModule
  ],
  declarations: [
    SocialPage
  ]
})
export class SocialPageModule {}
