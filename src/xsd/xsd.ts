import * as vscode from "vscode";
import { join } from "path";
import { writeFile, exists, mkdirSync, unlinkSync, readFile, readFileSync, createWriteStream, writeFileSync, existsSync } from "fs";

/**
 * @author Paul Ehigie Paul
 */
export class xsd {
  /**
   *
   */
  public constructor(private context: vscode.ExtensionContext) {
    this.main();
    this.checkValidation();
    // this.updateXsd();
    // console.log(join(__dirname))
    // console.log(vscode.workspace.workspaceFolders[0].uri.fsPath);
    // console.log('xsd works')
  }

  /**
   *
   */
  main(): void {
    this.context.subscriptions.push(
      vscode.commands.registerCommand(
        "NativescriptExtend.addXmlValidator",
        () => {
          this.copyXsd();
          this.setConfig();
        }
      )
    );
  }

  /**
   * Auto check if the schema is available on the user workspace
   * if not, ask user to insert it.
   */
  checkValidation(): void {
    let folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
    var schema = join(vscode.workspace.workspaceFolders[0].uri.fsPath, "schema", "tns.xsd");
    var config = join(vscode.workspace.workspaceFolders[0].uri.fsPath, ".vscode", "settings.json");

    exists(schema, exists => {
      if (!exists) {
        vscode.window
          .showInformationMessage(
            "Nativescript Extend has detected a Nativescript Project open. It can assist you with Xml code completion and validation. \n Do you want to enable it on this project ?",
            { modal: false },
            "YES",
            "NO"
          )
          .then(d => {
            switch (d) {
              case "YES":
                this.copyXsd();
                this.setConfig();
                break;
              default:
                break;
            }
          });
      } else {
        this.copyXsd();
        this.setConfig();
      }
    });

    exists(config, exists => {
      if (!exists) {
        this.setConfig();
      }
    });
  }

  /**
   * Add configuration to the users setings
   */
  setConfig() {
    var schema = join(vscode.workspace.workspaceFolders[0].uri.fsPath, "schema", "tns.xsd").replace(
      /(\s+)/g,
      "%20"
    );

    vscode.workspace.getConfiguration("NativescriptExtend").update(
      "fileAssociations",
      [
        {
          systemId: schema,
          pattern: "**/**/*.xml"
        },
        {
          systemId: "http://www.w3.org/2001/XMLSchema.xsd",
          pattern: schema
        }
      ],
      false
    );

    vscode.workspace.getConfiguration("files").update(
      "exclude",
      {
        schema: true
      },
      false
    );

    vscode.workspace.getConfiguration("NativescriptExtend").update(
      "completion.autoCloseTags",
      true,
      false
    );

    vscode.workspace.getConfiguration("NativescriptExtend").update(
      "format.enabled",
      true,
      false
    );


    vscode.workspace.getConfiguration("NativescriptExtend").update(
      "validation.enabled",
      true,
      false
    );
  }

  /**
   * Create a tns.xsd schema on the user workspace
   */
  async copyXsd(): Promise<void> {
    let exists = existsSync(join(vscode.workspace.workspaceFolders[0].uri.fsPath, "schema"))

    if (!exists) {
      mkdirSync(join(vscode.workspace.workspaceFolders[0].uri.fsPath, "schema"))
    }

    let xsd = await readFileSync(join(__dirname, "..", "..", "schema", "tsd.xsd"))

    writeFileSync(
      join(vscode.workspace.workspaceFolders[0].uri.fsPath, "schema", "tns.xsd"), xsd
    );



    vscode.window.showInformationMessage(
      "Nativescript code completion and validation is ready on this project"
    );
  }

  /**
   * remove and add the new extension config
   */
  async updateXsd() {
    var check = vscode.workspace
      .getConfiguration("NativescriptExtend")
      .has("fileAssociations");
    if (check) {
      await unlinkSync(
        join(vscode.workspace.workspaceFolders[0].uri.fsPath, ".vscode", "settings.json")
      );
      this.setConfig();
    }
  }
}
