import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ICareInterfacingRoutingModule } from './icare-interfacing-routing.module';
import { IcareInterfacingComponent } from './icare-interfacing.component';

@NgModule({
  declarations: [IcareInterfacingComponent],
  imports: [CommonModule, SharedModule, ICareInterfacingRoutingModule],
})
export class ICareInterfacingModule {}
