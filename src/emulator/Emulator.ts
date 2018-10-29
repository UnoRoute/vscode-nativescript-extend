import * as vscode from "vscode";
import { platformRun } from "./platformRun";
import { join } from "path";
import * as os from 'os'
/**
 * @author Paul Ehigie Paul
 */
export class Emulator extends platformRun {

  /*
   *
   */
  public constructor(private context: vscode.ExtensionContext) {
    super();
    this.setup();
    this.showStatuBar()
    this.main()
  }

  /**
   * this executes all the function of the emulator
   */
  private main(): void {
    this.context.subscriptions.push(
      vscode.commands.registerCommand('nativescriptExtend.setupEmulator', async () => {
        await this.setup();
        vscode.window.showInformationMessage('Nativescript Extend is already up and running');
      }))

    this.context.subscriptions.push(
      vscode.commands.registerCommand('nativescriptExtend.launchEmulator', () => {
        this.pickPlatform()
      })
    )

  }

  /**
   * this checks if the emulator is setup and prompts the user to setup or never show the prompt again
   */
  private  setup() {
    var check = vscode.workspace.getConfiguration("nativescript-extend").get("emulatorPath")
    var androidPath =  process.env.android_home || process.env.android_sdk_root;
    var emuPlatformExec

    switch (os.platform()) {
      case "win32":
        emuPlatformExec = 'emulator.exe'
        break;
      case "linux":
        emuPlatformExec = 'emulator'
        break;
      case "darwin":
        emuPlatformExec = 'emulator'
        break;
      default:
        break;
    }


    if (check == "") {
      vscode.window.showInformationMessage('Setting up android emulator path vscode');
      if (!androidPath) {
        vscode.window.showInformationMessage('Try and configure your android sdk');
        console.log("not avaliable");
      } else {
        vscode.workspace.getConfiguration('nativescript-extend').update('emulatorPath', join(androidPath, 'emulator', emuPlatformExec),true)
        vscode.window.showInformationMessage('Android emulator path found and ready to use');
      }
    }
  }


}
