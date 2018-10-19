import { createPage } from "./createPage";
import * as vscode from "vscode";
/**
 * context menu Class
 * @author Paul Ehigie Paul
 */
export class contextMenu extends createPage implements IContext {
  /**
   * context menu Class
   */
  constructor(private ctx: vscode.ExtensionContext) {
    super();
    this.main();
  }

  /**
   * run the context menu functions
   */
  main() {
    this.appJsPage();
    this.addNgPage();
    this.addTsPage();
    this.addVuePage();
  }

  appJsPage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("nativescript.addJSPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.javascript(arg.fsPath, e);
        });
      })
    );
  }
  addTsPage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("nativescript.addTsPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.typescript(arg.fsPath, e);
        });
      })
    );
  }
  addVuePage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("nativescript.addVuePage", arg => {
        vscode.window.showInputBox().then(e => {
          this.vue(arg.fsPath, e);
        });
      })
    );
  }
  addNgPage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("nativescript.addNGPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.angular(arg.fsPath, e);
        });
      })
    );
  }
}
