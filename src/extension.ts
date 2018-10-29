import * as vscode from "vscode";
import { Emulator } from "./emulator/Emulator";

import { contextMenu } from "./Context_Menu/contextMenu";
import { xsd } from "./xsd/xsd";
import { snippet } from "./snippets/snippets";
import { xml } from "./xml/extension";


export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "nativescript-extend" is now active!'
  );

  new Emulator(context);
  new contextMenu(context);
  new xsd(context);
  new snippet(context);
  xml(context)
}

export function deactivate() { }
