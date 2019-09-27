<div align="center">
<h1>NativeScript Extend for Visual Studio Code</h1>

[![vscode](https://img.shields.io/badge/vscode-v1.28+-373277.svg?style=for-the-badge)](https://code.visualstudio.com/updates/v1_28)[![made in nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=for-the-badge)](https://github.com/ehigiepaul/vscode-nativescript-extend)[![Marketplace Version](https://vsmarketplacebadge.apphb.com/version/paul-ehigie-paul.nativescript-extend.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=paul-ehigie-paul.nativescript-extend)

</div>
Nativescript Extend packs all your needs in make your Nativescript projects fast and easy. 

This extension will only be available on Nativescript projects.

This extension comes with snippets, emulator executor, context menu for Nativescript project, snippet toggler and a XML widgets, attributes, parameter validator and intelisense. With all this listed you now have a perfect extention that will help you on your Nativescript projects.

- All UI layout and widget are prefixed with `NS`. Attributes do not have or need any prefix.
- You can toggle the snippets off and on, if you want to use the xml intellisense.

> _Please note: To get the best out of this extension you wil have to disable or uninstall any nativescript snippets extension._

> Please if anyone has any feature or fix on this extension, please kindly make a request on our [Github](https://github.com/ehigiepaul/vscode-nativescript-extend/issues) repository.

# Changes

## [2.10.0] - 2019-9-27
- Security update
- NSE Command Palette updated 
- Users can now create new pages from the command palette and it will be located at the `{workspace_directory}/app/views`


# Features

- ### Nativescript intellisense and XML validation.
 <img height="500" width="auto" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/intellisense.gif"/>

- ### Emulator
  <img height="500" width="auto" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/emulator.gif"/>

- ### Emulator auto setup
  <img height="500" width="auto" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/auto%20setup.gif"/>

- ### Snippets
  <img height="500" width="auto" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/snippets.gif"/>

- ### Snippets toggler
  <img  width="700px" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/toggle%20snippets.gif"/>

- ### Explorer Context Menu Page Creation,
 <img height="500" width="auto" src="https://github.com/ehigiepaul/vscode-nativescript-extend/raw/master/image/cm.gif"/>

# Snippets Components keys

### Layouts

- Absolute Layout - `NSabsolute`
- Flexbox Layout - `NSflex`
- Dock Layout - `NSdock`
- Grid Layout - `NSgrid`
- Stack Layout - `NSstack`
- Wrap Layout - `NSwrap`

### Widgets

- Page - `NSpage`
- Action Bar - `NSactionbar`
- Label - `NSlabel`
- Text Field - `NStextfield`
- Text View - `NStextview`
- Image - `NSimg`
- Border - `NSborder`
- Button - `NSbtn`
- Search Bar - `NSsearchbar`
- Switch - `NSswitch`
- Slider - `NSslider`
- Progress - `NSprogress`
- Activity Indicator - `NSloading`
- Date Picker - `NSdate`
- Time Picker - `NStime`
- List Picker - `NSlistpicker`
- Segmented Bar - `NSsegmentedbar`
- Scroll View - `NSscrollview`
- Tab View - `NStabview`
- List View - `NSlistview`
- Web View - `NSwebview`
- Repeater - `NSrepeater`
- Password Field - `NSpassword`
- Action Item - `NSactionItem`

### Attributes

- backgroundColor - `bgColor`
- backgroundImage - `bgImage`
- borderColor - `borderColor`
- borderWidth - `borderWidth`
- translateX - `translateX`
- translateY - `translateY`
- margin - `margin`
- opacity - `opacity`
- style - `style`
- iosOverflowSafeArea - `iosOverflowSafeArea`
- cssClass - `class`
- left - `left`
- right - `right`
- top - `top`
- bottom - `bottom`
- action Bar Hidden - `actionBarHidden`
- Icon - `icon`
- xmlns - `xmlns`
- text - `text`
- icon - `icon`
- textWrap - `wrap`
- horizontalAlignment - `halign`
- verticalAlignment - `valign`
- visibility - `visibility`
- stretch - `stretch`
- keyboardType - `kbtype`
- colSpan - `colspan`
- rowSpan - `rowspan`
- row - `row`
- col - `col`
- width - `width`
- height - `height`
- itemWidth - `itemWidth`
- itemHeight - `itemHeight`
- colspan - `colspan`
- rowspan - `rowspan`
- dock - `dock`
- stretchLastChild - `stretchLastChild`
- flexDirection - `flexDirection`
- flexWrap - `flexWrap`
- justifyContent - `justifyContent`
- alignItems - `alignItems`
- alignContent - `alignContent`
- order - `order`
- flexGrow - `flexGrow`
- flexShrink - `flexShrink`
- alignSelf - `alignSelf`
- flexWrapBefore - `flexWrapBefore`

### Gestures Attributes

- tap - `tap`
- @tap - `@tap`
- doubleTap - `doubleTap`
- longPress - `longPress`
- pan - `pan`
- pinch - `pinch`
- rotation - `rotation`
- swipe - `swipe`
- touch - `touch`

# How to use Nativescript Extend

- Install Nativescript Extend from VScode marketplace.
- Active the extension.
- Create/run a Nativescript project.
- Nativescript detects a NS project and auto enable the emulator and ask to add xml validation for the project.
- Right click on the explorer panel area and create your prefered project framework page.
- Open a xml/html/vue file and get Nativescript Extend snippet on by defualt.
- Type NS prefix for widget and layouts snippets.
- Type your prefered attributes. Attributes dont need any prefix.

# MIT License

Copyright (c) 2018 Paul Ehigie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
