import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
