import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IcareInterfacingComponent } from './icare-interfacing.component';

const routes: Routes = [
  {
    path: 'icare-interfacing',
    component: IcareInterfacingComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICareInterfacingRoutingModule {}
