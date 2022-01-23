import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    selected_recipe?: Recipe;

    constructor() {

    }

    ngOnInit(): void {
    }

    setSelectedRecipe(recipe:any) {
        this.selected_recipe = recipe
    }
}
