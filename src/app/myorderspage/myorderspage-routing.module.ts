import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyorderspagePage } from './myorderspage.page';

const routes: Routes = [
  {
    path: '',
    component: MyorderspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyorderspagePageRoutingModule {}
