import * as vscode_1 from "vscode";
import * as file_contents_1 from "./file-contents";
import * as fs from "fs";
import * as path from "path";
import * as Q from "q";

export class AddView {
  // Show input prompt for folder name
  // The imput is also used to create the files with the respective name
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
          prompt: "What's the name of the new component?",
          value: ""
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
              var params = [];
              params.push(newFolderPath);
              params.push(fileName);
              deferred.resolve(params);
            }
          },
          error => console.error(error)
        );
    }
    return deferred.promise;
  }
  // Get file contents and create the new files in the folder
  createFiles(params) {
    const deferred = Q.defer();
    var folderName = params[0];
    var inputName = params[1];
    const fc = new file_contents_1.FileContents();
    const af = new AddView();
    // create an IFiles array including file names and contents
    var files = [
      {
        name: path.join(folderName, `${inputName}-view.xml`),
        //@ts-ignore
        content: fc.viewContent(inputName)
      },
      {
        name: path.join(folderName, `${inputName}-view.ts`),
        //@ts-ignore
        content: fc.viewCodeContent(inputName)
      }
    ];
    // write files
    af.writeFiles(files).then(errors => {
      //@ts-ignore
      if (errors.length > 0) {
        vscode_1.window.showErrorMessage(
          //@ts-ignore
          `${errors.length} file(s) could not be created. I'm sorry :-(`
        );
      } else {
        deferred.resolve(params);
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
  // Open the created page in the editor
  openFileInEditor(params) {
    const deferred = Q.defer();
    var folderName = params[0];
    var inputName = params[1];
    var fullFilePath = path.join(folderName, `${inputName}-component.xml`);
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
