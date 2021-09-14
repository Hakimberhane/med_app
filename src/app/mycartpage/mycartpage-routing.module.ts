import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycartpagePage } from './mycartpage.page';

const routes: Routes = [
  {
    path: '',
    component: MycartpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycartpagePageRoutingModule {}
