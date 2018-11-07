import * as vscode from 'vscode'
import { exec, execFile } from 'child_process';
import { join, parse } from 'path';
import download from "download"

export class snippet {
    bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 70)
    constructor(private context: vscode.ExtensionContext) {

        this.main()

    }

    main() {
        this.bar.show()
        this.snippetStatusBar(this.getSnippetVal())
        // this.checkCustomXmlInstalled()
        this.context.subscriptions.push(vscode.commands.registerCommand('nativescript-extend.snippets', (arg) => {
            this.switchSnippets(!this.getSnippetVal())
            this.snippetStatusBar(!this.getSnippetVal())
        }))
    }

    getSnippetVal(): boolean {
        var val: boolean = vscode.workspace.getConfiguration('nativescript-extend').get('enable.snippets')
        return val
    }

    switchSnippets(val: boolean) {
        if (val) {

            vscode.workspace.getConfiguration('editor').update('snippetSuggestions', "top", false)
        } else {
            vscode.workspace.getConfiguration('editor').update('snippetSuggestions', "none", false)
        }
        vscode.workspace.getConfiguration('nativescript-extend').update('enable.snippets', val, false)

    }

    snippetStatusBar(val) {
        this.bar.command = 'nativescript-extend.snippets'
        this.bar.text = val ? 'Snippets On' : 'Snippets Off'

    }

    installCustomXml() {
        var downloadPath = join(__dirname)
        var url = 'https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/vscode-xml-0.2.0.vsix'
        var file = parse(url).base

        download(url, downloadPath).then(() => {
            var command = `code --install-extension ${join(__dirname, file)}`
            exec(command, (err, stdout, stderr) => {
                console.log(stdout)
                console.log('done')
            })

            vscode.window.showInformationMessage('Vscode will need restart to round up Nativescript Intellisence', { modal: true }, 'Restart Later', 'Restart').then((res) => {
                switch (res) {
                    case 'Restart Later':
                        break;
                    case 'Restart':
                        vscode.commands.executeCommand('workbench.action.reloadWindow')
                        break
                    default:
                        break;
                }
            })
        })
    }

    checkCustomXmlInstalled() {
        var check = vscode.workspace.getConfiguration('nativescript-extend').get('intellisence')
        if (!check) {
            this.installCustomXml()
            vscode.workspace.getConfiguration('nativescript-extend').update('intellisence', true, true)
        }
    }
}