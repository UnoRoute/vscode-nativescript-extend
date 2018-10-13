const { window } = require("vscode");

export var showSuccessMessage = () => {
  window.showInformationMessage("Emulator is booting up ...");
};

export var showErrorMessage = () => {
  window.showErrorMessage("Emulator failed to boot.");
};
