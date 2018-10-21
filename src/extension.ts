// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { OS_PICKER } from "./emulator/constants";
import { androidPick } from "./emulator/android";
import { iOSPick } from "./emulator/ios";
import { contextMenu } from "./Context_Menu/contextMenu";

export var bar = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Right,
  0
);
// nsPreview;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "nativescript-extend" is now active!'
  );
  launchEmulator(context);
  new contextMenu(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function launchEmulator(context) {
  bar.tooltip = "Nativescript";
  bar.text = "Run Emulator";
  // bar.color = "red";
  bar.command = "nativescript.launchEmulator";
  bar.show();
  let disposable = vscode.commands.registerCommand(
    "nativescript.launchEmulator",
    () => {
      // const pickerList = ["Nativescript Preview", OS_PICKER.ANDROID];
      const pickerList = [OS_PICKER.ANDROID];
      process.platform === "darwin" && pickerList.push(OS_PICKER.IOS);

      vscode.window.showQuickPick(pickerList).then(response => {
        switch (response) {
          case OS_PICKER.ANDROID:
            androidPick();
            break;
          case OS_PICKER.IOS:
            iOSPick();
            break;
          // case "Nativescript Preview":
          //   runPreview();
          //   break;
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deviceStatusBar() {
  bar.tooltip = "Nativescript";
  bar.text = "Run Emulator";
  // bar.color = "red";
  bar.command = "nativescript.launchEmulator";
  bar.show();
}
