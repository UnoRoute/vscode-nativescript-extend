/**
 * @author Paul Ehigie Paul
 */
export class contents
  implements
    ITypescriptContent,
    IVueContents,
    IAngularContents,
    IJavascriptContent {
  modelTs(name: string): string {
    return `
import { Observable } from 'tns-core-modules/data/observable';

export class ${inputToUpperCase(name)}ViewModel extends Observable {
    constructor() {
        super();
    }
}
    `;
  }

  ts(name: string): string {
    return `
import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { ${inputToUpperCase(name)}ViewModel } from './${name}-view-model';

export function pageLoaded(args: EventData) {
     let page = <StackLayout>args.object;
    page.bindingContext = new ${inputToUpperCase(name)}ViewModel();
}

`;
  }

  vueFile(name: string): string {
    return `
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
                <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application." class="h2 description-label" />
                <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code." class="h2 description-label" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>

`;
  }

  html(name: string): string {
    return `
<ActionBar title="Home" class="action-bar">
</ActionBar>

<GridLayout>
    <ScrollView class="page">
        <StackLayout class="home-panel">
            <!--Add your page content here-->
            <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label"></Label>
            <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application."
             class="h2 description-label"></Label>
            <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code."
             class="h2 description-label"></Label>
        </StackLayout>
    </ScrollView>
</GridLayout>
`;
  }

  componentTs(name: string): string {
    return `
import { Component, OnInit } from "@angular/core";
@Component({
    selector: "${name}",
    moduleId: module.id,
    templateUrl: "./${name}.component.html",
    styleUrls: ['./${name}.component.css']
})
export class ${inputToUpperCase(name)}Component implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
`;
  }

  moduleTs(name: string): string {
    return `
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ${inputToUpperCase(
      name
    )}RoutingModule } from "./${name}-routing.module";
import { ${inputToUpperCase(name)}Component } from "./${name}.component";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        ${inputToUpperCase(name)}RoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ${inputToUpperCase(name)}Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ${inputToUpperCase(name)}Module { }
`;
  }

  routingModule(name: string): string {
    return `
    import { NgModule } from "@angular/core";
    import { Routes } from "@angular/router";
    import { NativeScriptRouterModule } from "nativescript-angular/router";
    
    import { ${inputToUpperCase(name)}Component } from "./${name}.component";
    
    const routes: Routes = [
        { path: "", component: ${inputToUpperCase(name)}Component }
    ];
    
    @NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class ${inputToUpperCase(name)}RoutingModule { }
`;
  }

  xml(name: string): string {
    return `
<Page loaded="pageLoaded" class="page" xmlns="http://www.nativescript.org/tns.xsd">

	<ActionBar title="${name}" class="action-bar">
	</ActionBar>

	<ScrollView>
		<StackLayout class="home-panel">
			<!--Add your page content here-->
			<Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
			<Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application."
			 class="h2 description-label" />
			<Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code."
			 class="h2 description-label" />
		</StackLayout>
	</ScrollView>
</Page>
`;
  }

  css(name: string): string {
    return `
.btn {
    font-size: 18;
}

@import '~nativescript-theme-core/css/core.light.css';

.home-panel{
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label{
    margin-bottom: 15;
}
`;
  }

  js(name: string): string {
    return `
var frameModule = require("tns-core-modules/ui/frame");
var ${inputToUpperCase(name)}ViewModel = require("./${name}-view-model");

var ${inputToUpperCase(name)}ViewModel = new ${inputToUpperCase(
      name
    )}ViewModel();

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = ${inputToUpperCase(name)}ViewModel;
}


exports.pageLoaded = pageLoaded;
    
`;
  }

  viewModelJs(name: string): string {
    return `
var observableModule = require("tns-core-modules/data/observable");
function ${inputToUpperCase(name)}ViewModel() {
  var viewModel = observableModule.fromObject({

  });

  return viewModel;
}

module.exports = ${inputToUpperCase(name)}ViewModel;   
    `;
  }

  /**
   *
   */
  public constructor() {}
}

function inputToUpperCase(inputName) {
  var inputUpperCase;
  inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  return this.camelCase(inputUpperCase);
}
