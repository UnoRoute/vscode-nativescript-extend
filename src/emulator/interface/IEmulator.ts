
/**
 * 
 */
interface IEmulator {

    /**
     * 
     */
    pickVersion(platform:string) :  void;

    /**
     * 
     */
    runVersion(version:string) :  void;

    /**
     * 
     */
    listVersion(platform:string) :  void;

    /**
     * 
     */
    platformCheck() :  void;

    /**
     * 
     */
    pickPlatform() :  void;

}