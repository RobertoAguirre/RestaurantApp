import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesPage } from './dishes.page';

const routes: Routes = [
  {
    path: '',
    component: DishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesPageRoutingModule {}
