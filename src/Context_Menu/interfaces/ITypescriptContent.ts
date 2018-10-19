/**
 * This is the interface for Typescript context
 */
interface ITypescriptContent {
  /**
   * @param name
   * @return
   */
  viewModelTs(name: string): string;

  /**
   * @param name
   * @return
   */
  ts(name: string): string;
}
