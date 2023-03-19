import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesModalPageRoutingModule } from './dishes-modal-routing.module';

import { DishesModalPage } from './dishes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DishesModalPageRoutingModule,
  ],
  declarations: [DishesModalPage],
})
export class DishesModalPageModule {}
