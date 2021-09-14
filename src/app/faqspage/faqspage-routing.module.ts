import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqspagePage } from './faqspage.page';

const routes: Routes = [
  {
    path: '',
    component: FaqspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqspagePageRoutingModule {}
