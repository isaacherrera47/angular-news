import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritesComponent} from './favorites.component';
import {MaterialModule} from '../material.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: FavoritesComponent}
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule
  ]
})
export class FavoritesModule {
}
