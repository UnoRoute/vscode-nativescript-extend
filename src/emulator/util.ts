import { exec, spawn, execSync } from "child_process";

/**
 * @author Paul Ehigie Paul
 */
export class util {
  /**
   *
   */
  public constructor() {}

  /**
   *@param path
   */
  static async runCmd(path: string) {
    return new Promise((res,rej)=>{
      exec(path, (err, stdout, stderr) => {
        if (err) {
          rej(err);
        } else {
          res({
            stdout,
            stderr
          });
        }
      });
    })
   
  //  var data
  //  try {
  //    var me = await execSync(path)
  //    data = me.toString()
  //  } catch (error) {
     
  //  }
  //  return data
  }

  /**
   *@param state
   */
 static messages(state: string): string {
    switch (state) {
      case "good":
        return "Emulator is booting up ...";
        break;
      case "bad":
        return "Error starting Emulator";
        break;
      default:
        break;
    }
  }
}

// util.runCmd('D:\\USER\\android-sdk\\emulator\\emulator.exe -list-avds').then(stdout=>{

//   console.log(stdout)
// })