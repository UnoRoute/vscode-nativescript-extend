import { workspace } from "vscode";

const config = () => {
  return workspace.getConfiguration("nativescript-extend");
};

export var emulatorPath = () => {
  return config().get("emulatorPath");
};
