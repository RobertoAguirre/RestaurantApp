import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesModalPageRoutingModule } from './dishes-modal-routing.module';

import { DishesModalPage } from './dishes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesModalPageRoutingModule
  ],
  declarations: [DishesModalPage]
})
export class DishesModalPageModule {}
