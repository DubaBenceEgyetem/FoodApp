import { Injectable } from '@angular/core';
import { Food } from '../../app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/p1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pizza',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/p2.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chicken salad',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/p3.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Crab',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/p4.png',
        tags: ['FastFood', 'Fry'],
      },
    ]
  }
}
