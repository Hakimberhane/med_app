import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinghistoryPage } from './shoppinghistory.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppinghistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinghistoryPageRoutingModule {}
