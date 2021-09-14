import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressmodalPageRoutingModule } from './addressmodal-routing.module';

import { AddressmodalPage } from './addressmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressmodalPageRoutingModule
  ],
  declarations: [AddressmodalPage]
})
export class AddressmodalPageModule {}
