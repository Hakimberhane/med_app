import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedhistoryPage } from './medhistory.page';

const routes: Routes = [
  {
    path: '',
    component: MedhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedhistoryPageRoutingModule {}
