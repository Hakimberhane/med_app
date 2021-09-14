import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadprescriptionPage } from './uploadprescription.page';

const routes: Routes = [
  {
    path: '',
    component: UploadprescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadprescriptionPageRoutingModule {}
