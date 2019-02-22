import {RecipeModel} from './recipe.model';

export class RecipeService {
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
