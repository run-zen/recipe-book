import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('inputName') newName:ElementRef;
    @ViewChild('inputAmt') newAmt:ElementRef;

    @Output() addShoppingItem = new EventEmitter<Ingredient>()

    constructor() {
    }

    ngOnInit(): void {
    }

    addItem() {
        const item = new Ingredient(this.newName.nativeElement.value, this.newAmt.nativeElement.value)
        this.addShoppingItem.emit(item)
        this.clearFields()
    }

    clearFields() {
        this.newName.nativeElement.value =''
        this.newAmt.nativeElement.value = undefined
    }
}
