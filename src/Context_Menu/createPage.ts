import { contents } from "./contents";
import { util } from "./util";

/**
 * This is the create content class
 * @author Paul Ehigie Paul
 */
export class createPage {
  /**
   * This is the create content class
   */
  content = new contents();
  constructor() {}

  /**
   *
   */
  javascript(path: string, name: string): void {
    util.createFile(path, `${name}-page.js`, this.content.js(name));
    util.createFile(path, `${name}-page.xml`, this.content.xml(name));
    util.createFile(path, `${name}-page.css`, this.content.css(name));
    util.createFile(
      path,
      `${name}-view-model.js`,
      this.content.viewModelJs(name)
    );

    // TODO implement here
  }

  /**
   *
   */
  typescript(path: string, name: string): void {
    util.createFile(path, `${name}-page.ts`, this.content.ts(name));
    util.createFile(path, `${name}-page.xml`, this.content.xml(name));
    util.createFile(path, `${name}-page.css`, this.content.css(name));
    util.createFile(
      path,
      `${name}-view-model.ts`,
      this.content.viewModelTs(name)
    );
  }

  /**
   *
   */
  angular(path: string, name: string): void {
    // TODO implement here
    util.createFile(
      path,
      `${name}-routing.module.ts`,
      this.content.routingModule(name)
    );
    util.createFile(path, `${name}-component.html`, this.content.html(name));
    util.createFile(path, `${name}-component.css`, this.content.css(name));
    util.createFile(
      path,
      `${name}-component.ts`,
      this.content.componentTs(name)
    );
    util.createFile(path, `${name}-module.ts`, this.content.moduleTs(name));
  }

  /**
   *
   */
  vue(path: string, name: string): void {
    // TODO implement here
    util.createFile(path, `${name}.vue`, this.content.vueFile(name), true);
  }
}
