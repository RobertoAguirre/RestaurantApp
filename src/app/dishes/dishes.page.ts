import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DishesModalPage } from '../dishes-modal/dishes-modal.page';
import { Dish } from '../models/dish';

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
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: DishesModalPage,
      componentProps: {
        dish: 'new',
      },
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  userRecords = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
    },
  ];

  ngOnInit() {
    this.filteredDishes = this.userRecords;
  }

  filterDishes() {
    if (this.searchQuery === '') {
      this.filteredDishes = this.userRecords;
    } else {
      this.filteredDishes = this.userRecords.filter((dish) => {
        return dish.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
