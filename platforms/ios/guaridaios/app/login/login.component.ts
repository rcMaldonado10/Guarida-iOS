import { Component, OnInit } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
import * as frameModule from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    public selectedIndex;
    public departments: Array<string> = ["Administración de Empresas", "Biología", "Ciencias de Computadoras",
                            "Ciencias Sociales", "Comunicación Tele-Radial", "Educación (Pedagogía)", "Enfermería",
                            "Sistemas de Oficina", "Física-Química"];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private page: Page, private router:Router) { 
    }

    ngOnInit(): void {
        console.log("Hello");
        if (this.page.ios) {
            var navigationBar = frameModule.topmost().ios.controller.navigationBar;
            navigationBar.prefersLargeTitles = true;
        }
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public toMain() {
        this.router.navigate(["/main"]);
    }
}