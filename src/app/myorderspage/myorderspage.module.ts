import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyorderspagePageRoutingModule } from './myorderspage-routing.module';

import { MyorderspagePage } from './myorderspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyorderspagePageRoutingModule
  ],
  declarations: [MyorderspagePage]
})
export class MyorderspagePageModule {}
