import { createPage } from "./createPage";
import * as vscode from 'vscode';
/**
 * context menu Class
 * @author Paul Ehigie Paul
 */
export class contextMenu extends createPage implements IContext {
  appJsPage(): void {
    throw new Error("Method not implemented.");
  }
  addTsPage(): void {
    throw new Error("Method not implemented.");
  }
  addVuePage(): void {
    throw new Error("Method not implemented.");
  }
  addNgPage(): void {
    throw new Error("Method not implemented.");
  }

  /**
   * context menu Class
   */
  constructor(context) {
    super();
    this.context = context
  }

  /**
   *
   */
  context: void;
  /**
   * run the context menu functions
   */
  main(): void {
      this.
    // TODO implement here
  }
}
