import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppinghistorydetailPageRoutingModule } from './shoppinghistorydetail-routing.module';

import { ShoppinghistorydetailPage } from './shoppinghistorydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppinghistorydetailPageRoutingModule
  ],
  declarations: [ShoppinghistorydetailPage]
})
export class ShoppinghistorydetailPageModule {}
