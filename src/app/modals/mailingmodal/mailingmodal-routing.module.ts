import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailingmodalPage } from './mailingmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MailingmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailingmodalPageRoutingModule {}
