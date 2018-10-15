export class FileContents {
  camelCase(input) {
    return input.replace(/-([a-z])/gi, function(all, letter) {
      return letter.toUpperCase();
    });
  }
  pageContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var pageContent =
      `<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo" class="page">\n` +
      `<Page.actionBar>\n` +
      `\t<ActionBar title="${inputUpperCase} Page" icon="" class="action-bar">\n` +
      `\t\t</ActionBar>\n` +
      `\t</Page.actionBar>\n` +
      `\t<Label class="${inputName}-page" text="${inputUpperCase} Page!"/>\n` +
      `</Page>`;
    return pageContent;
  }
  vueContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var pageContent =
      "<template>\n" +
      '\t<Page class="page">\n' +
      "\t</Page>\n" +
      "</template>\n" +
      "\n"+
      "<script>\n" +
      "\texport default {\n" +
      "\t\tdata(){\n" +
      "\t\t\treturn{\n" +
      "\t\t\t};\n" +
      "\t\t}\n" +
      "\t};\n" +
      "\n" +
      "</script>\n" +
      "<style>\n" +
      "\n" +
      "</style>\n";
    return pageContent;
  }
  pageCodeContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var pageCodeContent =
      `import { EventData } from 'data/observable';\n` +
      `import { Page } from 'ui/page';\n` +
      `import { ${inputUpperCase}ViewModel } from './${inputName}-view-model';\n` +
      `\n` +
      `export function navigatingTo(args: EventData) {\n` +
      `\tlet page = <Page>args.object;\n` +
      `\tpage.bindingContext = new ${inputUpperCase}ViewModel();\n` +
      `}`;
    return pageCodeContent;
  }

  viewModelContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var viewModelContent =
      `import {Observable} from 'data/observable';\n` +
      `\n` +
      `export class ${inputUpperCase}ViewModel extends Observable {\n` +
      `\n` +
      `\tconstructor() {\n` +
      `\t\tsuper();\n` +
      `\n` +
      `\t}\n` +
      `\n` +
      `}`;
    return viewModelContent;
  }

  componentContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var componentContent =
      `\n` +
      `<!-- http://moduscreate.com/custom-components-in-nativescript/ -->\n` +
      `\n` +
      `<Label class="${inputName}-component" loaded="onLoaded" text="${inputUpperCase} Component!"/>`;
    return componentContent;
  }

  componentCodeContent(inputName) {
    var inputUpperCase = this.inputToUpperCase(inputName);
    var componentCodeContent =
      `import { EventData } from 'data/observable'\n` +
      `\n` +
      `// http://moduscreate.com/custom-components-in-nativescript/\n` +
      `\n` +
      `export function onLoaded(args: EventData) {\n` +
      `\tvar label = args.object;\n` +
      `}`;
    return componentCodeContent;
  }

  cssContent(inputName, fileName) {
    var cssContent = `.${inputName}-${fileName} {\n\n}`;
    return cssContent;
  }

  inputToUpperCase(inputName) {
    var inputUpperCase;
    inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    return this.camelCase(inputUpperCase);
  }
}
