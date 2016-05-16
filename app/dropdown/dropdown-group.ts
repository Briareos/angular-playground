import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DropdownItem} from "./dropdown-item";

@Component({
    selector: 'dropdown-group',
    directives: [CORE_DIRECTIVES, DropdownItem],
    template: `
    <ul>
        <li>
            <h4>{{ group.title }}</h4>
        </li>
        <li *ngFor="let item of group.items">
            <dropdown-item [item]="item"></dropdown-item>
        </li>
    </ul>
    `,
    styles: [`
    `],
    inputs: ["group"]
})
export class DropdownGroup {
    @Input group;
}
