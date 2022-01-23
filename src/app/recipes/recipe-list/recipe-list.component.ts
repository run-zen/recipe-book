import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];

    @Output() onselectRecipe  = new EventEmitter<any>()

    constructor() {
        let newrecipe = new Recipe('Recipe', 'This is the description' , 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80')
        this.recipes.push(newrecipe)
        newrecipe = new Recipe('Recipe 1', 'This is the description' , 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
        this.recipes.push(newrecipe)
        newrecipe = new Recipe('Recipe 2', 'This is the description' , 'https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')
        this.recipes.push(newrecipe)

    }

    ngOnInit(): void {
        if(this.recipes.length > 0) {
            this.onselectRecipe.emit(this.recipes[0])
            this.recipes[0].isSelected = true
        }
    }

    selectRecipe(recipe:any, i:any) {
        this.onselectRecipe.emit(recipe)
        this.recipes.forEach(function(temp, index) {
            if(i === index) {
                temp.isSelected = true
            } else {
                temp.isSelected = false
            }
        })
    }

}
