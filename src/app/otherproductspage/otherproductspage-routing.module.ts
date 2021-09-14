import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherproductspagePage } from './otherproductspage.page';

const routes: Routes = [
  {
    path: '',
    component: OtherproductspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherproductspagePageRoutingModule {}
