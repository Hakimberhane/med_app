import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedhistorydetailPageRoutingModule } from './medhistorydetail-routing.module';

import { MedhistorydetailPage } from './medhistorydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedhistorydetailPageRoutingModule
  ],
  declarations: [MedhistorydetailPage]
})
export class MedhistorydetailPageModule {}
