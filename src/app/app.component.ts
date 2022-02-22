import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    TABS = {
        Recipes: 1,
        ShoppingList: 2
    }

    selectedTab: number;

    recipeCache;

    constructor() {
    }

    ngOnInit(): void {
        this.selectedTab = this.TABS.Recipes
    }

    handleHeaderClicked(tab: number) {
        this.selectedTab = tab
    }

    onSaveRecipeCache(data) {
        this.recipeCache = data
    }

}
