import { window } from "vscode";
import { emulatorPath } from "./config";
import { runCmd } from "./utils/commands";
import { showSuccessMessage, showErrorMessage } from "./utils/message";
import { ANDROID_COMMANDS } from "./constants";

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
      console.log(response);
      if (response) {
        const ranEmulator = runAndroidEmulator(response);
        if (ranEmulator) {
          showSuccessMessage();
        } else {
          showErrorMessage();
        }
      }
    });
  }
}

async function getAndroidEmulators() {
  let stdout = await runCmd(`${emulatorPath()}${ANDROID_COMMANDS.LIST_AVDS}`);
  return [stdout] || [{ stdout: "jkl;" }];
}

const runAndroidEmulator = async emulator => {
  let stdout = await runCmd(
    `${emulatorPath()}${ANDROID_COMMANDS.RUN_AVD}${emulator}`
  );
  return stdout || false;
};
