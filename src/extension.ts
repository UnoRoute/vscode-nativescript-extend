import * as vscode from "vscode";
import { Emulator } from "./emulator/Emulator";

import { contextMenu } from "./Context_Menu/contextMenu";
import { xsd } from "./xsd/xsd";
import { snippet } from "./snippets/snippets";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "NE" is now active!'
  );

  new contextMenu(context);
  new Emulator(context);
  new snippet(context);
  new xsd(context);
  // new xml(context)
  // new validation(context)
}

export function deactivate() {}
 