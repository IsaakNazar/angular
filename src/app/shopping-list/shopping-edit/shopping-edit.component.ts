import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from '../../common/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppingService.ingredientAdded.emit(
      new IngredientModel(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value)
    );
  }

}
