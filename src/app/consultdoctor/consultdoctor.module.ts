import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultdoctorPageRoutingModule } from './consultdoctor-routing.module';

import { ConsultdoctorPage } from './consultdoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultdoctorPageRoutingModule
  ],
  declarations: [ConsultdoctorPage]
})
export class ConsultdoctorPageModule {}
