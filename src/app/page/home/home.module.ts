import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeadModule } from '../../components/head/head.module';
import { SocialFabModule } from '../../components/social-fab/social.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeadModule,
    SocialFabModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
