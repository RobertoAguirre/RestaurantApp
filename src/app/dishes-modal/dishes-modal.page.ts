import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Dish } from '../models/dish';
import { DishesService } from '../services/dishes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dishes-modal',
  templateUrl: './dishes-modal.page.html',
  styleUrls: ['./dishes-modal.page.scss'],
})
export class DishesModalPage implements OnInit {
  title: string;
  mode: string;
  loading: boolean;

  dishForm: FormGroup;
  dish: Dish;
  isNew: string;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private dishesService: DishesService
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
    this.dish = this.navParams.get('dish');
    if (this.dish === undefined) {
      this.isNew = 'Nuevo platillo';
    }

    this.dishForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });

    //this.ingredients = this.navParams.get('ingredients');

    if (this.dish) {
      this.dishForm.patchValue({
        name: this.dish.name,
        category: this.dish.category,
        description: this.dish.category,
        price: this.dish.price,
        imageUrl: this.dish.imageUrl,
      });
    } else {
    }
  }

  save() {
    const dish: Dish = {
      name: this.dishForm.value.name,
      category: this.dishForm.value.category,
      description: this.dishForm.value.description,
      price: this.dishForm.value.price,
      imageUrl: this.dishForm.value.imageUrl,
    };
    this.loading = true;
    this.dishesService.Post(dish).subscribe((response) => {
      console.log(response);
      this.loading = false;
      this.presentAlert();
      this.modalController.dismiss(dish);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //header: 'Éxito',
      subHeader: 'Correcto',
      message: 'Platillo guardado exitosamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  saveChanges() {}

  async dismiss() {
    await this.modalController.dismiss();
  }
}
