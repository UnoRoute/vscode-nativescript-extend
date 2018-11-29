import * as vscode from "vscode";

export class snippet {
  bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 70);
  constructor(private context: vscode.ExtensionContext) {
    this.main();
  }

  main() {
    this.bar.show();
    this.snippetStatusBar(this.getSnippetVal());
    this.context.subscriptions.push(
      vscode.commands.registerCommand("nativescript-extend.snippets", arg => {
        this.switchSnippets(!this.getSnippetVal());
        this.snippetStatusBar(!this.getSnippetVal());
      })
    );
  }

  getSnippetVal(): boolean {
    var val: boolean = vscode.workspace
      .getConfiguration("nativescript-extend")
      .get("enable.snippets");
    return val;
  }

  switchSnippets(val: boolean) {
    if (val) {
      vscode.workspace
        .getConfiguration("editor")
        .update("snippetSuggestions", "top", false);
    } else {
      vscode.workspace
        .getConfiguration("editor")
        .update("snippetSuggestions", "none", false);
    }
    vscode.workspace
      .getConfiguration("nativescript-extend")
      .update("enable.snippets", val, false);
  }

  snippetStatusBar(val) {
    this.bar.command = "nativescript-extend.snippets";
    this.bar.text = val ? "Snippets On" : "Snippets Off";
  }
}
