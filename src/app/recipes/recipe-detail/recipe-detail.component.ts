import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: RecipeModel;

  constructor() { }

  ngOnInit() {
    console.log(this.recipeDetail)
  }

}
