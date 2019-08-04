import ua from 'universal-analytics'
import * as vscode from "vscode";


export class tracking {
    constructor(private context: vscode.ExtensionContext) {
        console.log('tracking on')
        var visitor = ua('UA-142238548-1', 'CUSTOM_CLIENTID_1', { strictCidFormat: false });
        visitor.pageview("/").send()

    }
}