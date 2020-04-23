import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [],
  providers: []
})

export class AdminModule {
  constructor() {}
}
