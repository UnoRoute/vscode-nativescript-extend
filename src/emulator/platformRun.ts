import { emulatorPref } from "./emulatorPref";
import * as vscode from 'vscode'
import * as os from 'os'
import { util } from "./util";
import { join } from "path";

/**
 * @author Paul Ehigie Paul
 */
export class platformRun extends emulatorPref implements IEmulator {
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0)
  emulatorPath = vscode.workspace.getConfiguration('NE').get('emulatorPath')
  emulatorVersion: string[]
  /**
   *
   */
  public constructor() {
    super();
    this.showStatuBar()
  }

  /**
     * Show the Nativescript emulator statue bar
     */
  async showStatuBar(text?: string, command?: string) {
    this.statusBar.text = text || 'Run Emulator'
    this.statusBar.tooltip = 'Nativescript Extend Run Emulator'
    command == "" ?
      this.statusBar.command = null :
      this.statusBar.command = 'NE.launchEmulator'
    this.statusBar.show()
    // TODO implement here
  }

  /**
   *  show the list of available emulator version
   * @param platform this will be the selected emulator platform you choose
   */
  pickVersion(platform: string): void {
    switch (platform) {
      case 'android':
        vscode.window.showQuickPick(this.emulatorVersion).then(async res => {
          if (res) {
            await this.showStatuBar(`Running ${res}`, "")
            this.runVersion(res)
          }
        })
        break;
      case 'ios':
        vscode.window.showQuickPick(this.emulatorVersion).then(async res => {
          await this.showStatuBar(`Running ${res}`, "")
          const uuid = res.match(/\[(.*?)\]/g)[0].replace(/[\[\]']+/g, "");
          let stdout = await util.runCmd('instruments -w' + uuid);
          return stdout || false;
        })
        break;

      default:
        break;
    }
  }

  async runVersion(version: string) {
    vscode.window.showInformationMessage('Booting Nativescript Extend  Emulator ....')
    //@ts-ignore
    var stdout = await util.runCmd(`${join(this.emulatorPath)} @${version}`)
    this.showStatuBar()
  }

  async listVersion(platform: string): Promise<void> {
    switch (platform) {
      case 'android':
        //@ts-ignore
        var stdout = await util.runCmd(`${join(this.emulatorPath, '')} -list-avds`);
        //@ts-ignore
        this.emulatorVersion = stdout.stdout.trim().split('\n')
        this.pickVersion('android')
        break;
      case 'ios':
        //@ts-ignore
        var stdout = await util.runCmd(`instruments -s devices`);
        //@ts-ignore
        this.emulatorVersion = stdout.stdout.trim().split('\n')
          .filter(s => s.includes("Simulator"))
          .map(s => s.replace(/ *\([^)]*\) */g, ""))
        this.pickVersion('ios')
        break;

      default:
        break;
    }
  }

  platformCheck(): void {
    throw new Error("Method not implemented.");
  }

  pickPlatform(): void {
    var platform = { android: 'Android Emulator', ios: 'IOS Emulator' }
    var emulatorList = [platform.android]

    if (os.platform() == 'darwin') {
      emulatorList.push(platform.ios)
    }

    vscode.window.showQuickPick(emulatorList).then(response => {
      switch (response) {
        case platform.android:
          this.listVersion('android')
          break;
        case platform.ios:
          this.listVersion('ios')
          break;
        default:
          break;
      }
    })

  }
}
