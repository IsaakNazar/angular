import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pineapples', 8)
  ];
  constructor() { }

  ngOnInit() {
  }
  onAddedIngredient(ingredient: IngredientModel) {
    this.ingredients.push(new IngredientModel(ingredient.name, ingredient.amount));
     console.log(ingredient);
  }

}
