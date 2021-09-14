import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailingmodalPageRoutingModule } from './mailingmodal-routing.module';

import { MailingmodalPage } from './mailingmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailingmodalPageRoutingModule
  ],
  declarations: [MailingmodalPage]
})
export class MailingmodalPageModule {}
