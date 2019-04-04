import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButton,
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
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
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    MatButton,
    MatToolbar,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class MaterialModule {
}
