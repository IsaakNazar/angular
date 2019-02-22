import {EventEmitter} from '@angular/core';
import {IngredientModel} from '../common/ingredient.model';

export class ShoppingListService {

  ingredientAdded = new EventEmitter<IngredientModel[]>();

  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pineapples', 8)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
