
/**
 * This is the interface for Javascipt context
 */
interface IJavascriptContent {

    /**
     * @param name 
     * @return
     */
    xml(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    css(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    js(name: string) :  string;

    /**
     * @param name 
     * @return
     */
    viewModelJs(name: string) :  string;

}