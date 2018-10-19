
/**
 * This is the interface for Typescript context
 */
interface ITypescriptContent {

    /**
     * @param name 
     * @return
     */
    modelTs(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    ts(name: string) :  string;

}