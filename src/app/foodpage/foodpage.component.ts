import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit{

  food!:Food;

  constructor(private activetedRoute:ActivatedRoute, private foodService:FoodService){
    activetedRoute.params.subscribe((params) =>{
      if(params.id)
        {
          this.food = foodService.getFoodById(params.id)
        }
    }
    )
  }

  ngOnInit(): void {
    
  }
}
