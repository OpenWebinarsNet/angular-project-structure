import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
