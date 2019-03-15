import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../common/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel(
      'First recipe',
      'Very simple recipe list',
      'assets/img/bread-meat.jpeg',
      [
        new IngredientModel('Meat', 2),
        new IngredientModel('Fries', 15)
      ]),
    new RecipeModel(
      'Second recipe',
      'A bit simpler recipe list',
      'assets/img/sliced-eggs.jpg',
      [
        new IngredientModel('Banana', 4),
        new IngredientModel('Apple', 18)
      ]),
    new RecipeModel(
      'Third recipe',
      'Very good recipe list',
      'assets/img/egg-recipe.jpg',
      [
        new IngredientModel('Chicken chicks', 22),
        new IngredientModel('Chicken wings', 31)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeId(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addingIngredients(ingredients);
  }
}
