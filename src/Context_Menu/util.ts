import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
/**
 * @author Paul Ehigie Paul
 */
export class util {
  /**
   *
   */
  public constructor() {}

  /**
   * @param dir
   * @param file
   * @param data
   */
  static createFile(
    dir: string,
    file: string,
    data: string,
    vue?: boolean
  ): void {
    var d = path.parse(file).name.match(/-\w+|\.\w+/g)
      ? path.parse(file).name.replace(/-\w+|\.\w+/g, "") 
      : path.parse(file).name;
    if (vue) {
      d = "";
    }
    fs.exists(path.join(dir, d, file), exist => {
      if (!exist) {
        fs.mkdir(path.join(dir, d), () => {
          fs.writeFile(path.join(dir, d, file), data, err => {
          });
        });
      } else {
        vscode.window.showErrorMessage(`${file} exists`);
        
      }
      this.message(`${file} created`);
    });
  }

  /**
   * @param message
   */
  static message(message: string): void {
    vscode.window.showInformationMessage(message);
    // TODO implement here
  }
}

// util.createFile(__dirname, "paul.ppo-hhk.txt", "jhjhjgjgjg");
// util.createFile(__dirname, "paul.txt", "jhjhjgjgjg");
