import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButton,
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbar,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButton,
    MatToolbar,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {
}
