import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycartpagePageRoutingModule } from './mycartpage-routing.module';

import { MycartpagePage } from './mycartpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycartpagePageRoutingModule
  ],
  declarations: [MycartpagePage]
})
export class MycartpagePageModule {}
