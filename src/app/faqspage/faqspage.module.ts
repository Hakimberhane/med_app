import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { FaqspagePageRoutingModule } from './faqspage-routing.module';

import { FaqspagePage } from './faqspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqspagePageRoutingModule
  ],
  declarations: [FaqspagePage]
})
export class FaqspagePageModule {}
