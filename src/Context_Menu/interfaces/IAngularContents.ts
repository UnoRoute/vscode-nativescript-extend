
/**
 * This is the interface for Angular context
 */
interface IAngularContents {

    /**
     * @param name 
     * @return
     */
    html(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    componentTs(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    moduleTs(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    routingModule(name: string) :  string;

}