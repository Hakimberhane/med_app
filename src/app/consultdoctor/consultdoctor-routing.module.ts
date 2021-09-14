import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultdoctorPage } from './consultdoctor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultdoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultdoctorPageRoutingModule {}
