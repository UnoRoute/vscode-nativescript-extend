import * as vscode from "vscode";
import { Emulator } from "./emulator/Emulator";

import { contextMenu } from "./Context_Menu/contextMenu";
import { xsd } from "./xsd/xsd";
import { snippet } from "./snippets/snippets";
import { readFile } from "fs";
import { join } from "path";
import { tracking } from "./tracking/tracking";

export function activate(context: vscode.ExtensionContext) {


   console.log(vscode.workspace.workspaceFolders[0].uri.fsPath)
  var file = join(vscode.workspace.workspaceFolders[0].uri.fsPath, "package.json")


  readFile(file, (err, data) => {
    if (err) console.log('This is not a nativescript project')

    var pack = JSON.parse(data.toString())
    if (pack.nativescript) {
      console.log(
        'Congratulations, "Nativescript-Extend" is now active!'
      );
      //  enable extension if nativescript is found in the package.json
      new contextMenu(context);
      new Emulator(context);
      new snippet(context);
      new xsd(context);
      new tracking(context)
    } else {
      console.log('This is not a nativescript project')
    }
  })

  // new xml(context)
  // new validation(context)
}

export function deactivate() { }
