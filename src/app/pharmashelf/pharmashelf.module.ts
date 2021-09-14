import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmashelfPageRoutingModule } from './pharmashelf-routing.module';

import { PharmashelfPage } from './pharmashelf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmashelfPageRoutingModule
  ],
  declarations: [PharmashelfPage]
})
export class PharmashelfPageModule {}
