import * as vscode from 'vscode'
import * as shell from 'shelljs'
import { join } from 'path';
import { writeFile, exists } from 'fs';
import { content } from './content'
/**
 * @author Paul Ehigie Paul
 */
export class xsd {

    /**
     * 
     */
    public constructor(private context: vscode.ExtensionContext) {
        this.main()
        this.checkValidation()

    }

    /**
     * 
     */
    main(): void {
        this.context.subscriptions.push(
            vscode.commands.registerCommand('nativescriptExtend.addXmlValidator', () => {
                this.copyXsd()
                this.setConfig()
            })
        )
        // TODO implement here
    }

    /**
     * 
     */
    checkValidation(): void {
        var schema = join(vscode.workspace.rootPath, 'schema', 'tns.xsd')
        exists(schema, (exists) => {
            if (!exists) {
                vscode.window.showInformationMessage("Nativescript Extend detected a Nativescript Project. It can help you with your xml validation. \n Do you want to enable it on this project", { modal: false }, 'yes', 'no').then(d => {
                    switch (d) {
                        case 'yes':
                            this.copyXsd()
                            this.setConfig()
                            break;
                        default:
                            break;
                    }
                })
            }
        })

    }

    setConfig() {
        var schema = join(vscode.workspace.rootPath, 'schema', 'tns.xsd').replace(/(\s+)/g,"%20")
        vscode.workspace.getConfiguration('xml').update('fileAssociations', [
            {
                "systemId": schema,
                "pattern": "**/**/*.xml"
            },
        ],false)

        vscode.workspace.getConfiguration('files').update("exclude",{
            "schema":true
        },false)
    }
    /**
     * 
     */
    copyXsd(): void {

        shell.mkdir(join(vscode.workspace.rootPath, 'schema'))
        writeFile(join(vscode.workspace.rootPath, 'schema', 'tns.xsd'), content, (err) => {
            vscode.window.showInformationMessage('Nativescript XML schema added')
        })
        // TODO implement here
    }

}

