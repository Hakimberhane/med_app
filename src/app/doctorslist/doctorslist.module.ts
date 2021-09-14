import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorslistPageRoutingModule } from './doctorslist-routing.module';

import { DoctorslistPage } from './doctorslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorslistPageRoutingModule
  ],
  declarations: [DoctorslistPage]
})
export class DoctorslistPageModule {}
