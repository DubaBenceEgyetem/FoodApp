import { Injectable } from '@angular/core';
import { Food } from '../../app/shared/models/Food';
import { Tag } from '../../app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number):Food{
    return this.getAll().find(food => food.id == id)!
  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 2 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
    ];
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllFoodsByTag(tag:string): Food[]{
  
    return tag == "All" ?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['American'],
        stars: 4.5,
        imageUrl: '/assets/images/p1.png',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pizza',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Italian'],
        stars: 4.7,
        imageUrl: '/assets/images/p2.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chicken salad',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['German'],
        stars: 3.5,
        imageUrl: '/assets/images/p3.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Crab',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['France'],
        stars: 3.3,
        imageUrl: '/assets/images/p4.png',
        tags: ['SlowFood', 'Fry'],
      },
    ]
  }
}
