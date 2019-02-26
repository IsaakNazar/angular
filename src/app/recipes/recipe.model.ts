import {IngredientModel} from '../common/ingredient.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(name: string, descr: string, imagePath: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.description = descr;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
