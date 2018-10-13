import * as vscode_1 from "vscode";
export class Utils {
  static getStylesheetConfig() {
    var addAngularConfigStylesheet = vscode_1.workspace.getConfiguration(
      "addAngular"
    )["stylesheet"];
    var stylesheetFileExtension = "css";
    switch (addAngularConfigStylesheet) {
      case "css":
        break;
      case "sass":
        stylesheetFileExtension = "scss";
        break;
      case "less":
        stylesheetFileExtension = "less";
        break;
      default:
        stylesheetFileExtension = "css";
    }
    return stylesheetFileExtension;
  }
  static getAddTestFileConfig() {
    return vscode_1.workspace.getConfiguration("addAngular")["addTestFile"];
  }
}
