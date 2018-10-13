// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { OS_PICKER } from "./emulator/constants";
import { androidPick } from "./emulator/android";
import { iOSPick } from "./emulator/ios";
import { AddPage } from "./context/add-page";
import { AddComponent } from "./context/add-component";
import { AddVuePage } from "./context/add-vueFile";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "nativescript-extend" is now active!'
  );
  launchEmulator(context);
  deviceStatusBar();
  addPage(context);
  addVuePage(context);
  addComponent(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function launchEmulator(context) {
  let disposable = vscode.commands.registerCommand(
    "nativescript.launchEmulator",
    () => {
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
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deviceStatusBar() {
  var bar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    3
  );
  bar.tooltip = "Nativescript";
  bar.text = "devices";
  bar.color = "red";
  bar.command = "nativescript.launchEmulator";
  bar.show();
}

function addPage(context) {
  var addPages = vscode.commands.registerCommand(
    "nativescript.addPage",
    args => {
      const addPage = new AddPage();

      addPage
        .showFileNameDialog(args)
        .then(addPage.createFiles)
        .then(addPage.openFileInEditor)
        .catch(err => {
          if (err) {
            vscode.window.showErrorMessage(err);
          }
        });
    }
  );
  context.subscriptions.push(addPages);
}

function addComponent(context) {
  var addComponents = vscode.commands.registerCommand(
    "nativescript.addComponent",
    args => {
      let component = new AddComponent();
      component
        .showFileNameDialog(args)
        .then(component.createFiles)
        .then(component.openFileInEditor)
        .catch(err => {
          if (err) {
            vscode.window.showErrorMessage(err);
          }
        });
    }
  );
  context.subscriptions.push(addComponents);
}

function addVuePage(context) {
  let t = vscode.commands.registerCommand("nativescript.addVuePage", args => {
    let vue = new AddVuePage();
    vue
      .showFileNameDialog(args)
      .then(vue.createFiles)
      .then(vue.openFileInEditor)
      .catch(err => {
        if (err) {
          vscode.window.showErrorMessage(err);
        }
      });
  });
  context.subscriptions.push(t);
}
