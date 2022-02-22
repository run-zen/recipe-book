import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    show = false
    TABS = {
        Recipes: 1,
        ShoppingList: 2
    }

    @Input() selectedTab;


    @Output() headerLinkClicked = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
