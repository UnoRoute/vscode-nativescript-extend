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
    // console.log('content menu working')
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
      vscode.commands.registerCommand("NativescriptExtend.addJSPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.javascript(arg.fsPath, e.toLowerCase());
        });
      })
    );
  }
  addTsPage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("NativescriptExtend.addTsPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.typescript(arg.fsPath, e.toLowerCase());
        });
      })
    );
  }
  addVuePage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("NativescriptExtend.addVuePage", arg => {
        vscode.window.showInputBox().then(e => {
          this.vue(arg.fsPath, e.toLowerCase());
        });
      })
    );
  }
  addNgPage(): void {
    this.ctx.subscriptions.push(
      vscode.commands.registerCommand("NativescriptExtend.addNGPage", arg => {
        vscode.window.showInputBox().then(e => {
          this.angular(arg.fsPath, e.toLowerCase());
        });
      })
    );
  }
}
