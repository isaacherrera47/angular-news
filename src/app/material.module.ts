import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButton, MatButtonModule, MatCardModule, MatChipsModule, MatToolbar, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatButton,
    MatToolbar,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialModule {
}
