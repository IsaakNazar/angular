import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../common/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredientAdded.emit(
      new IngredientModel(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value));
  }

}
