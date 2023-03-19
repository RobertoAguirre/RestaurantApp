import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DishesModalPage } from '../dishes-modal/dishes-modal.page';
import { Dish } from '../models/dish';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {
  data: any[];
  filterKeys = ['productName', 'productCategory', 'productId', 'productStock'];

  filterTerm: string;
  searchQuery: string;
  filteredDishes = [];
  loading: boolean;

  dishes = [];

  constructor(
    public dishesService: DishesService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.loading = true;
    this.dishesService.GetAll().subscribe((response) => {
      let _response;
      _response = response;
      this.dishes = _response;
      console.log(this.dishes);
      this.filteredDishes = this.dishes;
      this.loading = false;
    });
  }

  async selectDish(dish) {
    const modal = await this.modalController.create({
      component: DishesModalPage,
      componentProps: {
        dish: dish,
      },
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  async newDish() {
    const modal = await this.modalController.create({
      component: DishesModalPage,
      componentProps: {},
      cssClass: 'my-custom-class',
    });
    await modal.present();

    modal.onDidDismiss().then(() => {
      this.getDishes();
    });
  }

  filterDishes() {
    if (this.searchQuery === '') {
      this.filteredDishes = this.dishes;
    } else {
      this.filteredDishes = this.dishes.filter((dish) => {
        return dish.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
