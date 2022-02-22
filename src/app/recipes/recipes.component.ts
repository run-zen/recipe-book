import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
    selected_recipe: Recipe;

    @Input() cachedData:any

    @Output() saveRecipeCache = new EventEmitter<any>()

    constructor() {

    }

    ngOnInit(): void {
        if (this.cachedData && this.cachedData.selectedRecipe) {
            this.selected_recipe = this.cachedData.selectedRecipe;
        }
    }

    setSelectedRecipe(recipe: any) {
        this.selected_recipe = recipe
    }

    ngOnDestroy() {
        this.saveRecipeCache.emit({
            selectedRecipe: this.selected_recipe
        })
    }
}
