import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-dishes-modal',
  templateUrl: './dishes-modal.page.html',
  styleUrls: ['./dishes-modal.page.scss'],
})
export class DishesModalPage implements OnInit {
  title: string;
  mode: string;

  dishForm: FormGroup;
  dish: Dish;
  isNew: string;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams
  ) {
    this.dishForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.isNew = this.navParams.get('dish');
    //this.ingredients = this.navParams.get('ingredients');

    if (this.mode == 'new') {
    } else {
    }
  }

  async save() {
    const dish: Dish = {
      name: this.dishForm.value.name,
      category: this.dishForm.value.category,
      description: this.dishForm.value.description,
      price: this.dishForm.value.price,
      imageUrl: this.dishForm.value.imageUrl,
    };
    await this.modalController.dismiss(dish);
  }

  saveChanges() {}

  async dismiss() {
    await this.modalController.dismiss();
  }
}
