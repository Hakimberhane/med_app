import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppinghistoryPageRoutingModule } from './shoppinghistory-routing.module';

import { ShoppinghistoryPage } from './shoppinghistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppinghistoryPageRoutingModule
  ],
  declarations: [ShoppinghistoryPage]
})
export class ShoppinghistoryPageModule {}
