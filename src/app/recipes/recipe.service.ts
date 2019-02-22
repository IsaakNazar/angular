import {RecipeModel} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel(
      'First recipe',
      'Very simple recipe list',
      'assets/img/bread-meat.jpeg'),
    new RecipeModel(
      'Second recipe',
      'A bit simpler recipe list',
      'assets/img/sliced-eggs.jpg'),
    new RecipeModel(
      'Third recipe',
      'Very good recipe list',
      'assets/img/egg-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
