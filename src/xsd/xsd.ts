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
     * Auto check if the schema is available on the user workspace
     * if not, ask user to insert it.
     */
    checkValidation(): void {
        var schema = join(vscode.workspace.rootPath, 'schema', 'tns.xsd')
        exists(schema, (exists) => {
            if (!exists) {
                vscode.window.showInformationMessage("Nativescript Extend has detected a Nativescript Project open. It can assist you with Xml code completion and validation. \n Do you want to enable it on this project ?", { modal: false }, 'YES', 'NO').then(d => {
                    switch (d) {
                        case 'YES':
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

    /**
     * Add configuration to the users setings
     */
    setConfig() {
        var schema = join(vscode.workspace.rootPath, 'schema', 'tns.xsd').replace(/(\s+)/g,"%20")
        vscode.workspace.getConfiguration('xml').update('fileAssociations', [
            {
                "systemId": schema,
                "pattern": "**/**/*.xml",
                "fileNamePattern":"**/**/*.xml"
            },
        ],false)
        vscode.workspace.getConfiguration('xml').update('xmlAssociations', [
            {
                "systemId": schema,
                "pattern": "**/**/*.xml",
                "fileNamePattern":"**/**/*.xml"
            },
        ],false)

        vscode.workspace.getConfiguration('files').update("exclude",{
            "schema":true
        },false)
    }
    /**
     * Create a tns.xsd schema on the user workspace
     */
    copyXsd(): void {

        shell.mkdir(join(vscode.workspace.rootPath, 'schema'))
        writeFile(join(vscode.workspace.rootPath, 'schema', 'tns.xsd'), content, (err) => {
            vscode.window.showInformationMessage('Nativescript code completion and validation is added')
        })
        // TODO implement here
    }

}

