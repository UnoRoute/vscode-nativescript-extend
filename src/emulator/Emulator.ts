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
    this.main()
    this.showStatuBar()
    // console.log('emulator is working')
  }

  /**
   * this executes all the function of the emulator
   */
  private main(): void {
    this.context.subscriptions.push(
      vscode.commands.registerCommand('NE.setupEmulator', async () => {
        await this.setup();
        vscode.window.showInformationMessage('Nativescript Extend is already up and running');
      }))

    this.context.subscriptions.push(
      vscode.commands.registerCommand('NE.launchEmulator', () => {
        this.pickPlatform()
      })
    )

  }

  /**
   * this checks if the emulator is setup and prompts the user to setup or never show the prompt again
   */
  private setup() {
    var check = vscode.workspace.getConfiguration("NE").get("emulatorPath")
    var androidPath = process.env.ANDROID_HOME|| process.env.android_home || process.env.android_sdk_root;
    var emuPlatformExec;

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
      vscode.window.showInformationMessage('We are setting up android emulator path for vscode');
      setTimeout(()=>{
        if (!androidPath) {
          vscode.window.showInformationMessage('It seems you dont have android sdk setup/installed on this system \n Please kindly it up for Nativescript Extend to work');
          // console.log("not avaliable");
        } else {
          vscode.workspace.getConfiguration('NE').update('emulatorPath', join(androidPath, 'emulator', emuPlatformExec),true)
          vscode.window.showInformationMessage('Nativescript Android emulator is up and ready to use. ENJOY');
        }
      },3000);
    }
  }


}
