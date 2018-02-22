import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"


@Component({
    selector: "main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private page:Page) { 
        // page.actionBar.navigationButton.visibility = 'collapse'
    }

    ngOnInit(): void {
        console.log("Main Page");
    }

    tabTap() {
        console.log("Tabview Tapped");
    }
}