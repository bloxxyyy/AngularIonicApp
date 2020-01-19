import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialFabComponent } from './social-fab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    SocialFabComponent
  ],
  declarations: [
    SocialFabComponent
  ]
})
export class SocialFabModule {}
