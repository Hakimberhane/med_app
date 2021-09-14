import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmashelfPage } from './pharmashelf.page';

const routes: Routes = [
  {
    path: '',
    component: PharmashelfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmashelfPageRoutingModule {}
