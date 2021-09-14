import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedhistoryPageRoutingModule } from './medhistory-routing.module';

import { MedhistoryPage } from './medhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedhistoryPageRoutingModule
  ],
  declarations: [MedhistoryPage]
})
export class MedhistoryPageModule {}
