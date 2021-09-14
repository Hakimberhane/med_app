import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadprescriptionPageRoutingModule } from './uploadprescription-routing.module';

import { UploadprescriptionPage } from './uploadprescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadprescriptionPageRoutingModule
  ],
  declarations: [UploadprescriptionPage]
})
export class UploadprescriptionPageModule {}
