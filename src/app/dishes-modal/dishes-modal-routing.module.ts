import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesModalPage } from './dishes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DishesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesModalPageRoutingModule {}
