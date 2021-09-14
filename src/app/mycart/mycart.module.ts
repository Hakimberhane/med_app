import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MycartPageRoutingModule } from './mycart-routing.module'
import { MycartPage } from './mycart.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MycartPageRoutingModule,
  ],
  declarations: [MycartPage]
})
export class MycartPageModule {}
