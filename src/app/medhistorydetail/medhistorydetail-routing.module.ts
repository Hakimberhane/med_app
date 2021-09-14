import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedhistorydetailPage } from './medhistorydetail.page';

const routes: Routes = [
  {
    path: '',
    component: MedhistorydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedhistorydetailPageRoutingModule {}
