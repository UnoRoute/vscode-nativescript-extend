import { window } from "vscode";
import { emulatorPath } from "./config";
import { runCmd } from "./utils/commands";
import { showSuccessMessage, showErrorMessage } from "./utils/message";
import { ANDROID_COMMANDS } from "./constants";
import * as vscode from "vscode";
import { bar } from "../extension";

// Get Android devices and pick one
export async function androidPick() {
  var formattedEmulators;
  const emulators = await getAndroidEmulators();

  if (emulators) {
    for (let i of emulators) {
      //@ts-ignore
      formattedEmulators = i.stdout.trim().split("\n");
    }
    window.showQuickPick(formattedEmulators).then(response => {
      if (response) {
        const ranEmulator = runAndroidEmulator(response);
        if (ranEmulator) {
          bar.text = `Running ${response}`;
          // bar.color = "green";
          showSuccessMessage();
          return ranEmulator;
        } else {
          showErrorMessage();
        }
      }
    });
  }
}

async function getAndroidEmulators() {
  let stdout = await runCmd(`${emulatorPath()}${ANDROID_COMMANDS.LIST_AVDS}`);
  return [stdout] || [{ stdout: "test" }];
}

const runAndroidEmulator = async emulator => {
  bar.command = "";
  let stdout = await runCmd(
    `${emulatorPath()}${ANDROID_COMMANDS.RUN_AVD}${emulator}`
  );
  bar.text = "Run Emulator";
  // bar.color = "red";
  bar.command = "nativescript.launchEmulator";
  return stdout || false;
};
