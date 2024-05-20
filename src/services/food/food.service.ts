import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    return[
      '/assets/images/p1.webp',
      '/assets/images/p2.webp',
      '/assets/images/p3.png',
      '/assets/images/p4.png'
    ]
  }
}
