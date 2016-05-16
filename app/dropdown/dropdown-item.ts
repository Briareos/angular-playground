import {Component, Input} from '@angular/core';

@Component({
    selector: 'dropdown-item',
    template: `
    <label for="">
        <input type="radio" name="id">{{ item }}
    </label>
    `,
    inputs: ["id", "item"]
})
export class DropdownItem {
    @Input id;
    @Input item;
}
