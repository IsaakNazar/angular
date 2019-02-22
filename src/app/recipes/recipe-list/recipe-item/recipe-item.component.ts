import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();  //custom Event

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeSelected.emit();
  }

}
