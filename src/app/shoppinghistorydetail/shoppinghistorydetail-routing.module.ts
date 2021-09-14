import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinghistorydetailPage } from './shoppinghistorydetail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppinghistorydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinghistorydetailPageRoutingModule {}
