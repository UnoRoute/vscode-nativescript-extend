import * as vscode_1 from "vscode";
import * as file_contents_1 from "./file-contents";
import * as utils_1 from "./utils";
import * as fs from "fs";
import * as path from "path";
import * as Q from "q";

export class AddFiles {
  // Show input prompt for folder name
  // The imput is also used to create the files with the respective name as defined in the Angular style guide [https://angular.io/docs/ts/latest/guide/style-guide.html]
  showFileNameDialog(args) {
    const deferred = Q.defer();
    var clickedFolderPath;
    if (args) {
      clickedFolderPath = args.fsPath;
    } else {
      if (!vscode_1.window.activeTextEditor) {
        deferred.reject(
          "Please open a file first.. or just right-click on a file/folder and use the context menu!"
        );
        return deferred.promise;
      } else {
        clickedFolderPath = path.dirname(
          vscode_1.window.activeTextEditor.document.fileName
        );
      }
    }
    var newFolderPath = fs.lstatSync(clickedFolderPath).isDirectory()
      ? clickedFolderPath
      : path.dirname(clickedFolderPath);
    if (vscode_1.workspace.rootPath === undefined) {
      deferred.reject("Please open a project first. Thanks! :-)");
    } else {
      vscode_1.window
        .showInputBox({
          prompt: "What's the name of the new folder?",
          value: "folder"
        })
        .then(
          fileName => {
            if (
              !fileName ||
              /[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?\s]/g.test(fileName)
            ) {
              deferred.reject(
                "That's not a valid name! (no whitespaces or special characters)"
              );
            } else {
              deferred.resolve(path.join(newFolderPath, fileName));
            }
          },
          error => console.error(error)
        );
    }
    return deferred.promise;
  }
  // Create the new folder
  createFolder(folderName) {
    const deferred = Q.defer();
    fs.exists(folderName, exists => {
      if (!exists) {
        fs.mkdirSync(folderName);
        deferred.resolve(folderName);
      } else {
        deferred.reject("Folder already exists");
      }
    });
    return deferred.promise;
  }
  // Get file contents and create the new files in the folder
  createFiles(folderName) {
    const deferred = Q.defer();
    var inputName = path.parse(folderName).name;
    const fc = new file_contents_1.FileContents();
    const af = new AddFiles();
    let stylesheetFileExtension = utils_1.Utils.getStylesheetConfig();
    let addTestFile = utils_1.Utils.getAddTestFileConfig();
    // create an IFiles array including file names and contents
    var files = [
      {
        name: path.join(folderName, `${inputName}.component.ts`),
        content: fc.componentContent(inputName)
      },
      {
        name: path.join(folderName, `${inputName}.component.html`),
        //@ts-ignore
        content: fc.templateContent(inputName)
      },
      {
        name: path.join(
          folderName,
          `${inputName}.component.${stylesheetFileExtension}`
        ),
        //@ts-ignore
        content: fc.cssContent(inputName)
      }
    ];
    if (addTestFile) {
      files.push({
        name: path.join(folderName, `${inputName}.component.spec.ts`),
        //@ts-ignore
        content: fc.specContent(inputName)
      });
    }
    // write files
    af.writeFiles(files).then(errors => {
      //@ts-ignore
      if (errors.length > 0) {
        //@ts-ignore
        vscode_1.window.showErrorMessage(
          //@ts-ignore
          `${errors.length} file(s) could not be created. I'm sorry :-(`
        );
      } else {
        deferred.resolve(folderName);
      }
    });
    return deferred.promise;
  }
  writeFiles(files) {
    const deferred = Q.defer();
    var errors = [];
    files.forEach(file => {
      fs.writeFile(file.name, file.content, err => {
        if (err) {
          errors.push(err.message);
        }
        deferred.resolve(errors);
      });
    });
    return deferred.promise;
  }
  // Open the created component in the editor
  openFileInEditor(folderName) {
    const deferred = Q.defer();
    var inputName = path.parse(folderName).name;
    var fullFilePath = path.join(folderName, `${inputName}.component.ts`);
    vscode_1.workspace.openTextDocument(fullFilePath).then(textDocument => {
      if (!textDocument) {
        return;
      }
      vscode_1.window.showTextDocument(textDocument).then(editor => {
        if (!editor) {
          return;
        }
        deferred.resolve(editor);
      });
    });
    return deferred.promise;
  }
}
