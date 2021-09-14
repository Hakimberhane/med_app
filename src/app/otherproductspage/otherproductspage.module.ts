import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherproductspagePageRoutingModule } from './otherproductspage-routing.module';

import { OtherproductspagePage } from './otherproductspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherproductspagePageRoutingModule
  ],
  declarations: [OtherproductspagePage]
})
export class OtherproductspagePageModule {}
