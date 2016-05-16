import {Component, Inject} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DropdownGroup} from './dropdown-group';

var counter = 0;

@Component({
    selector: 'dropdown',
    template: `
    <ul>
        <li><h3>{{ data.title }}</h3></li>
        <li *ngFor="let group of data.groups">
            <dropdown-group [group]="group" [idFactory]="getId"></dropdown-group>
        </li>
    </ul>
    `,
    styles: [`
    ul {
        border: 1px solid black;
    }
    `],
    directives: [CORE_DIRECTIVES, DropdownGroup],
    inputs: ["data"]
})
export class Dropdown {
    @Inject data;
    id = "dropdown-" + counter++;

    getId(item) {
        if (this.data.type === "single") {
            return this.id;
        }


    }
}
