import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesPageRoutingModule } from './dishes-routing.module';

import { DishesPage } from './dishes.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [DishesPage],
})
export class DishesPageModule {}
