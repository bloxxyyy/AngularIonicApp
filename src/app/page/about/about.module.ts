import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { HeadModule } from '../../components/head/head.module';
import { SocialFabModule } from '../../components/social-fab/social.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    HeadModule,
    SocialFabModule
  ],
  declarations: [
    AboutPage
  ]
})
export class AboutPageModule {}
