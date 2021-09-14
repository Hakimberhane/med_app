import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorslistPage } from './doctorslist.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorslistPageRoutingModule {}
