import {Component} from '@angular/core';
import {Dropdown} from "./dropdown/dropdown.component";

@Component({
    selector: 'my-app',
    directives: [Dropdown],
    template: `
    <h1>My First Angular 2 App</h1>
    <dropdown [data]="dd1"></dropdown>
    `
})
export class AppComponent {
    dd1 = {
        title: "Select something",
        type: "single",
        groups: [
            {
                title: "DD List",
                items: [
                    "Foo",
                    "bar"
                ]
            }
        ]
    }
}
