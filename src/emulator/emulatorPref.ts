/**
 * @author Paul Ehigie Paul
 */
export class emulatorPref {
  /**
   *
   */
  public constructor() {}

  /**
   *
   */
  get androidPath(): string {
    var env = process.env;
    var android;
    if (env.andriod_home || env.android_sdk_root) {
      android = env.andriod_home || env.android_sdk_root;
    } else {
      android = null;
    }
    return android;
  }
  /**
   *
   */
  get iosPath(): string {
    return;
  }
  /**
   *
   */
  getEmuPath(): void {
    // TODO implement here
  }

  /**
   *
   */
  emulatorSearch(): void {
    // TODO implement here
  }
}
