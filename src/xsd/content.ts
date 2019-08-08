export var content = `<?xml version="1.0" ?>
<!--SCHEMA VERSION: 2.0.0-->
<xs:schema  xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">
  <!-- ActionBar sections -->
  <xs:attributeGroup name="actionBarAttributes">
    <xs:attribute name="title" type="StringValidator" />
    <xs:attribute name="navigationButton" type="StringValidator" />
    <xs:attribute name="actionItems" type="StringValidator" />
    <xs:attribute name="page" type="StringValidator" />
    <xs:attribute name="flat" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ActionBar">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:choice>
          <xs:element name="ActionBar.actionItems" maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="ActionItem" type="ActionItem" maxOccurs="unbounded" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>                                                                             
        </xs:choice>
        <xs:attributeGroup ref="actionBarAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ActionBar" type="ActionBar" />
  <xs:element name="action-bar" type="ActionBar" />
  <!-- ActionItem section -->
  <xs:attributeGroup name="actionItemAttributes">
    <xs:attribute name="text" type="StringValidator" />
    <xs:attribute name="icon" type="StringValidator" />
    <xs:attribute name="visibility" type="VisibilityValidator" />
    <xs:attribute name="actionBar" type="StringValidator" />
    <xs:attribute name="page" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ActionItem">
    <xs:complexContent>
      <xs:extension base="Bindable">
        <xs:attributeGroup ref="actionItemAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ActionItem" type="ActionItem" />
  <xs:element name="action-item" type="ActionItem" />
  <!-- Activity indicator section -->
  <xs:attributeGroup name="activityIndicatorAttributes">
    <xs:attribute name="busy" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ActivityIndicator">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="activityIndicatorAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ActivityIndicator" type="ActivityIndicator" />
  <xs:element name="activity-indicator" type="ActivityIndicator" />
  <!-- Border section -->
  <xs:attributeGroup name="borderAttributes">
    <xs:attribute name="cornerRadius" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Border">
    <xs:complexContent>
      <xs:extension base="ContentView">
        <xs:attributeGroup ref="borderAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Border" type="Border" />
  <xs:element name="border" type="Border" />
  <!-- Button section -->
  <xs:attributeGroup name="buttonAttributes">
    <xs:attribute name="text" type="StringValidator" />
    <xs:attribute name="textWrap" type="BooleanValidator" />
    <xs:attribute name="formattedText" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Button">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="buttonAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Button" type="Button" />
  <xs:element name="button" type="Button" />
  <!-- Content View section  -->
  <xs:attributeGroup name="contentViewAttributes" />
  <xs:complexType name="ContentView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:sequence>
          <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
        </xs:sequence>
        <xs:attributeGroup ref="contentViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ContentView" type="ContentView" />
  <xs:element name="content-view" type="ContentView" />
  <!-- Bindable section -->
  <xs:attributeGroup name="bindableAttributes" />
  <xs:complexType name="Bindable">
    <xs:attributeGroup ref="bindableAttributes" />
  </xs:complexType>
  <xs:element name="Bindable" type="Bindable" />
  <xs:element name="bindable" type="Bindable" />
  <!-- View class section -->
  <xs:attributeGroup name="viewAttributes">
    <xs:attribute name="automationText" type="StringValidator" />
    <xs:attribute name="background" type="StringValidator" />
    <xs:attribute name="backgroundColor" type="ColorValidator" />
    <xs:attribute name="backgroundImage" type="StringValidator" />
    <xs:attribute name="borderColor" type="ColorValidator" />
    <xs:attribute name="borderLeftColor" type="ColorValidator" />
    <xs:attribute name="borderRightColor" type="ColorValidator" />
    <xs:attribute name="borderTopColor" type="ColorValidator" />
    <xs:attribute name="borderBottomColor" type="ColorValidator" />
    <xs:attribute name="borderTopLeftRadius" type="NumberValidator" />
    <xs:attribute name="borderTopRightRadius" type="NumberValidator" />
    <xs:attribute name="borderBottomLeftRadius" type="NumberValidator" />
    <xs:attribute name="borderBottomRightRadius" type="NumberValidator" />
    <xs:attribute name="borderRadius" type="NumberValidator" />
    <xs:attribute name="borderWidth" type="NumberValidator" />
    <xs:attribute name="borderLeftWidth" type="NumberValidator" />
    <xs:attribute name="borderRightWidth" type="NumberValidator" />
    <xs:attribute name="borderTopWidth" type="NumberValidator" />
    <xs:attribute name="borderBottomWidth" type="NumberValidator" />
    <xs:attribute name="iosOverflowSafeArea" type="BooleanValidator" />
    <xs:attribute name="color" type="ColorValidator" />
    <xs:attribute name="loaded" type="StringValidator" />
    <xs:attribute name="unloaded" type="StringValidator" />
    <xs:attribute name="minWidth" type="NumberValidator" />
    <xs:attribute name="minHeight" type="NumberValidator" />
    <xs:attribute name="width" type="NumberValidator" />
    <xs:attribute name="height" type="NumberValidator" />
    <xs:attribute name="margin" type="StringValidator" />
    <xs:attribute name="marginLeft" type="NumberValidator" />
    <xs:attribute name="marginTop" type="NumberValidator" />
    <xs:attribute name="marginRight" type="NumberValidator" />
    <xs:attribute name="marginBottom" type="NumberValidator" />
    <xs:attribute name="horizontalAlignment" type="HorizontalAlignmentValidator" />
    <xs:attribute name="verticalAlignment" type="VerticalAlignmentValidator" />
    <xs:attribute name="visibility" type="VisibilityValidator" />
    <xs:attribute name="opacity" type="NumberValidator" />
    <xs:attribute name="translateX" type="NumberValidator" />
    <xs:attribute name="translateY" type="NumberValidator" />
    <xs:attribute name="scaleX" type="NumberValidator" />
    <xs:attribute name="scaleY" type="NumberValidator" />
    <xs:attribute name="originX" type="NumberValidator" />
    <xs:attribute name="originY" type="NumberValidator" />
    <xs:attribute name="rotate" type="NumberValidator" />
    <xs:attribute name="isEnabled" type="BooleanValidator" />
    <xs:attribute name="isUserInteractionEnabled" type="BooleanValidator" />
    <xs:attribute name="id" type="StringValidator" />
    <xs:attribute name="cssClass" type="StringValidator" />
    <xs:attribute name="className" type="StringValidator" />
    <xs:attribute name="style" type="StringValidator" />
    <xs:attribute name="cssType" type="StringValidator" />
    <xs:attribute name="row" type="NumberValidator" />
    <xs:attribute name="col" type="NumberValidator" />
    <xs:attribute name="rowSpan" type="NumberValidator" />
    <xs:attribute name="colSpan" type="NumberValidator" />
    <xs:attribute name="left" type="NumberValidator" />
    <xs:attribute name="top" type="NumberValidator" />
    <xs:attribute name="dock" type="DockValidator" />
    <xs:attribute name="class" type="StringValidator" />
    <xs:attribute name="tap" type="StringValidator" />
    <xs:attribute name="ontap" type="StringValidator" />
    <xs:attribute name="doubletap" type="StringValidator" />
    <xs:attribute name="ondoubletap" type="StringValidator" />
    <xs:attribute name="longpress" type="StringValidator" />
    <xs:attribute name="onlongpress" type="StringValidator" />
    <xs:attribute name="pinch" type="StringValidator" />
    <xs:attribute name="onpinch" type="StringValidator" />
    <xs:attribute name="pan" type="StringValidator" />
    <xs:attribute name="onpan" type="StringValidator" />
    <xs:attribute name="swipe" type="StringValidator" />
    <xs:attribute name="onswipe" type="StringValidator" />
    <xs:attribute name="rotation" type="StringValidator" />
    <xs:attribute name="onrotation" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="View">
    <xs:attributeGroup ref="viewAttributes" />
  </xs:complexType>
  <xs:element name="View" type="View" />
  <xs:element name="view" type="View" />
  <!-- Custom LayoutView -->
  <xs:attributeGroup name="customLayoutViewAttributes" />
  <xs:complexType name="CustomLayoutView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:sequence>
          <xs:any processContents="skip" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attributeGroup ref="customLayoutViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="CustomLayoutView" type="CustomLayoutView" />
  <xs:element name="custom-layout-view" type="CustomLayoutView" />
  <!-- Date picker section -->
  <xs:attributeGroup name="datePickerAttributes">
    <xs:attribute name="year" type="NumberValidator" />
    <xs:attribute name="month" type="NumberValidator" />
    <xs:attribute name="day" type="NumberValidator" />
    <xs:attribute name="date" type="StringValidator" />
    <xs:attribute name="maxDate" type="StringValidator" />
    <xs:attribute name="minDate" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="DatePicker">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="datePickerAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="DatePicker" type="DatePicker" />
  <xs:element name="date-picker" type="DatePicker" />
  <!-- Editable TextBase section -->
  <xs:attributeGroup name="editableTextBaseAttributes">
    <xs:attribute name="keyboardType" type="StringValidator" />
    <xs:attribute name="returnKeyType" type="ReturnKeyTypeValidator" />
    <xs:attribute name="editable" type="BooleanValidator" />
    <xs:attribute name="updateTextTrigger" type="StringValidator" />
    <xs:attribute name="autocapitalizationType" type="StringValidator" />
    <xs:attribute name="autocorrect" type="BooleanValidator" />
    <xs:attribute name="hint" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="EditableTextBase">
    <xs:complexContent>
      <xs:extension base="TextBase">
        <xs:attributeGroup ref="editableTextBaseAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="EditableTextBase" type="EditableTextBase" />
  <xs:element name="editable-text-base" type="EditableTextBase" />
  <!-- HTML View section -->
  <xs:attributeGroup name="htmlViewAttributes">
    <xs:attribute name="html" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="HtmlView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="htmlViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="HtmlView" type="HtmlView" />
  <xs:element name="html-view" type="HtmlView" />
  <!-- Image section -->
  <xs:attributeGroup name="imageAttributes">
    <xs:attribute name="isLoading" type="BooleanValidator" />
    <xs:attribute name="stretch" type="StretchValidator" />
    <xs:attribute name="src" type="StringValidator" />
    <xs:attribute name="loadMode" type="StringValidator" />
    <xs:attribute name="tintColor" type="ColorValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Image">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="imageAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Image" type="Image" />
  <xs:element name="image" type="Image" />
  <!-- Label section -->
  <xs:attributeGroup name="labelAttributes">
    <xs:attribute name="textWrap" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Label">
    <xs:complexContent>
      <xs:extension base="TextBase">
        <xs:attributeGroup ref="labelAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Label" type="Label" />
  <xs:element name="label" type="Label" />
  <!-- AbsoluteLayout Section -->
  <xs:attributeGroup name="absoluteLayoutAttributes" />
    <xs:complexType name="AbsoluteLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="absoluteLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AbsoluteLayout" type="AbsoluteLayout" />
  <xs:element name="absolute-layout" type="AbsoluteLayout" />
  <!-- DockLayout Section -->
  <xs:attributeGroup name="dockLayoutAttributes">
    <xs:attribute name="stretchLastChild" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="DockLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="dockLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="DockLayout" type="DockLayout" />
  <xs:element name="dock-layout" type="DockLayout" />
  <!-- Gridlayout section -->
  <xs:attributeGroup name="gridLayoutAttributes">
    <xs:attribute name="rows" type="StringValidator" />
    <xs:attribute name="columns" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="GridLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="gridLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="GridLayout" type="GridLayout" />
  <xs:element name="grid-layout" type="GridLayout" />
  <!-- Layout Base Section -->
  <xs:attributeGroup name="layoutBaseAttributes">
    <xs:attribute name="padding" type="StringValidator" />
    <xs:attribute name="paddingBottom" type="NumberValidator" />
    <xs:attribute name="paddingLeft" type="NumberValidator" />
    <xs:attribute name="paddingRight" type="NumberValidator" />
    <xs:attribute name="paddingTop" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="LayoutBase">
    <xs:complexContent>
      <xs:extension base="CustomLayoutView">
        <xs:attributeGroup ref="layoutBaseAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="LayoutBase" type="LayoutBase" />
  <xs:element name="layout-base" type="LayoutBase" />
  <!-- Stacklayout Section -->
  <xs:attributeGroup name="stackLayoutAttributes">
    <xs:attribute name="orientation" type="OrientationValidator" />
  </xs:attributeGroup>
  <xs:complexType name="StackLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="stackLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="StackLayout" type="StackLayout" />
  <xs:element name="stack-layout" type="StackLayout" />
  <!-- FlexboxLayout Section -->
  <xs:attributeGroup name="flexboxLayoutAttributes">
    <xs:attribute name="alignContent" type="StringValidator" />
    <xs:attribute name="alignItems" type="StringValidator" />
    <xs:attribute name="alignSelf" type="StringValidator" />
    <xs:attribute name="flexDirection" type="StringValidator" />
    <xs:attribute name="flexGrow" type="NumberValidator" />
    <xs:attribute name="flexShrink" type="NumberValidator" />
    <xs:attribute name="flexWrap" type="StringValidator" />
    <xs:attribute name="flexWrapBefore" type="BooleanValidator" />
    <xs:attribute name="justifyContent" type="StringValidator" />
    <xs:attribute name="order" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="FlexboxLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="flexboxLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="FlexboxLayout" type="FlexboxLayout" />
  <xs:element name="flexbox-layout" type="FlexboxLayout" />
  <!-- Wraplayout Section -->
  <xs:attributeGroup name="wrapLayoutAttributes">
    <xs:attribute name="orientation" type="OrientationValidator" />
    <xs:attribute name="itemWidth" type="NumberValidator" />
    <xs:attribute name="itemHeight" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="WrapLayout">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="wrapLayoutAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="WrapLayout" type="WrapLayout" />
  <xs:element name="wrap-layout" type="WrapLayout" />
  <!-- ListPicker Section -->
  <xs:attributeGroup name="listPickerAttributes">
    <xs:attribute name="selectedIndex" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ListPicker">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="listPickerAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ListPicker" type="ListPicker" />
  <xs:element name="list-picker" type="ListPicker" />
  <!-- ListView Section -->
  <xs:attributeGroup name="listViewAttributes">
    <xs:attribute name="itemLoading" type="StringValidator" />
    <xs:attribute name="itemTap" type="StringValidator" />
    <xs:attribute name="loadMoreItems" type="StringValidator" />
    <xs:attribute name="isScrolling" type="BooleanValidator" />
    <xs:attribute name="itemTemplate" type="StringValidator" />
    <xs:attribute name="separatorColor" type="ColorValidator" />
    <xs:attribute name="rowHeight" type="NumberValidator" />
    <xs:attribute name="items" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ListView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:all>
          <xs:element name="ListView.itemTemplate" minOccurs="0" maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:all>
        <xs:attributeGroup ref="listViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ListView" type="ListView" />
  <xs:element name="list-view" type="ListView" />
  <!-- Page Section -->
  <xs:attributeGroup name="pageAttributes">
    <xs:attribute name="showingModally" type="StringValidator" />
    <xs:attribute name="shownModally" type="StringValidator" />
    <xs:attribute name="navigatingTo" type="StringValidator" />
    <xs:attribute name="navigatedTo" type="StringValidator" />
    <xs:attribute name="navigatingFrom" type="StringValidator" />
    <xs:attribute name="navigatedFrom" type="StringValidator" />
    <xs:attribute name="backgroundSpanUnderStatusBar" type="BooleanValidator" />
    <xs:attribute name="enableSwipeBackNavigation" type="BooleanValidator" />
    <xs:attribute name="statusBarStyle" type="StatusBarStyleValidator" />
    <xs:attribute name="actionBarHidden" type="BooleanValidator" />
    <xs:attribute name="css" type="StringValidator" />
    <xs:attribute name="actionBar" type="StringValidator" />
    <xs:attribute name="modal" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Page">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:sequence>
          <xs:any maxOccurs="2" processContents="lax" />
        </xs:sequence>
        <xs:attributeGroup ref="pageAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Page" type="Page" />
  <xs:element name="page" type="Page" />
  <!--    Template Vue section-->
  <xs:complexType name="Template">
    <xs:sequence>
      <xs:any maxOccurs="1" processContents="skip" />
    </xs:sequence>
  </xs:complexType>
  <xs:element name="Template" type="Template" />
  <xs:element name="template" type="Template" />
  <!-- Placeholder Section -->
  <xs:attributeGroup name="placeholderAttributes">
    <xs:attribute name="creatingView" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Placeholder">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="placeholderAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Placeholder" type="Placeholder" />
  <xs:element name="placeholder" type="Placeholder" />
  <!-- Progress Section -->
  <xs:attributeGroup name="progressAttributes">
    <xs:attribute name="value" type="NumberValidator" />
    <xs:attribute name="maxValue" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Progress">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="progressAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Progress" type="Progress" />
  <xs:element name="progress" type="Progress" />
  <!-- Proxy View Container Section -->
  <xs:attributeGroup name="proxyViewContainerAttributes" />
  <xs:complexType name="ProxyViewContainer">
    <xs:complexContent>
      <xs:extension base="LayoutBase">
        <xs:attributeGroup ref="proxyViewContainerAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ProxyViewContainer" type="ProxyViewContainer" />
  <xs:element name="proxy-view-container" type="ProxyViewContainer" />
  <!-- Repeater Section -->
  <xs:attributeGroup name="repeaterAttributes">
    <xs:attribute name="itemTemplate" type="StringValidator" />
    <xs:attribute name="itemsLayout" type="LayoutValidator" />
    <xs:attribute name="items" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Repeater">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:all>
          <xs:element name="Repeater.itemTemplate" minOccurs="0" maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
          <xs:element name="Repeater.itemsLayout" maxOccurs="1">
            <xs:complexType>
              <xs:group ref="UILayouts" maxOccurs="1" />
            </xs:complexType>
          </xs:element>
        </xs:all>
        <xs:attributeGroup ref="repeaterAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Repeater" type="Repeater" />
  <xs:element name="repeater" type="Repeater" />
  <!-- Scroll View Section -->
  <xs:attributeGroup name="scrollViewAttributes">
    <xs:attribute name="scroll" type="StringValidator" />
    <xs:attribute name="verticalOffset" type="NumberValidator" />
    <xs:attribute name="horizontalOffset" type="NumberValidator" />
    <xs:attribute name="scrollableHeight" type="NumberValidator" />
    <xs:attribute name="scrollableWidth" type="NumberValidator" />
    <xs:attribute name="isScrollEnabled" type="BooleanValidator" />
    <xs:attribute name="orientation" type="OrientationValidator" />
  </xs:attributeGroup>
  <xs:complexType name="ScrollView">
    <xs:complexContent>
      <xs:extension base="ContentView">
        <xs:attributeGroup ref="scrollViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ScrollView" type="ScrollView" />
  <xs:element name="scroll-view" type="ScrollView" />
  <!-- Search Bar Section -->
  <xs:attributeGroup name="searchBarAttributes">
    <xs:attribute name="submit" type="StringValidator" />
    <xs:attribute name="clear" type="StringValidator" />
    <xs:attribute name="text" type="StringValidator" />
    <xs:attribute name="hint" type="StringValidator" />
    <xs:attribute name="textFieldBackgroundColor" type="ColorValidator" />
    <xs:attribute name="textFieldHintColor" type="ColorValidator" />
  </xs:attributeGroup>
  <xs:complexType name="SearchBar">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="searchBarAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SearchBar" type="SearchBar" />
  <xs:element name="search-bar" type="SearchBar" />
  <!-- SegmentedBar Section -->
  <xs:attributeGroup name="segmentedBarAttributes">
    <xs:attribute name="selectedIndex" type="NumberValidator" />
    <xs:attribute name="selectedBackgroundColor" type="ColorValidator" />
    <xs:attribute name="items" type="StringValidator" />
    <xs:attribute name="selectedIndexChanged" type="StringValidator" />
  </xs:attributeGroup>
  <xs:complexType name="SegmentedBar">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:choice>
          <xs:element name="SegmentedBar.items" maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="SegmentedBarItem" maxOccurs="unbounded">
                  <xs:complexType>
                    <xs:attribute name="title" type="StringValidator" />
                  </xs:complexType>
                </xs:element>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
        <xs:attributeGroup ref="segmentedBarAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SegmentedBar" type="SegmentedBar" />
  <xs:element name="segmented-bar" type="SegmentedBar" />
  <!-- Slider Section -->
  <xs:attributeGroup name="sliderAttributes">
    <xs:attribute name="value" type="NumberValidator" />
    <xs:attribute name="minValue" type="NumberValidator" />
    <xs:attribute name="maxValue" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Slider">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="sliderAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Slider" type="Slider" />
  <xs:element name="slider" type="Slider" />
  <!-- Switch Section -->
  <xs:attributeGroup name="switchAttributes">
    <xs:attribute name="checked" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="Switch">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="switchAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Switch" type="Switch" />
  <xs:element name="switch" type="Switch" />
  <!-- TabView section -->
  <xs:attributeGroup name="tabViewAttributes">
    <xs:attribute name="items" type="StringValidator" />
    <xs:attribute name="selectedIndex" type="NumberValidator" />
    <xs:attribute name="selectedTabTextColor" type="ColorValidator" />
    <xs:attribute name="tabsBackgroundColor" type="ColorValidator" />
    <xs:attribute name="tabTextColor" type="ColorValidator" />
    <xs:attribute name="tabTextFontSize" type="NumberValidator" />
    <xs:attribute name="selectedIndexChanged" type="StringValidator" />
    <xs:attribute name="androidSelectedTabHighlightColor" type="ColorValidator" />
  </xs:attributeGroup>
  <xs:complexType name="TabView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:choice>
          <xs:element name="TabView.items" maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="TabViewItem" maxOccurs="unbounded">
                  <xs:complexType>
                    <xs:complexContent>
                      <xs:extension base="View">
                        <xs:all>
                          <xs:element name="TabViewItem.view" minOccurs="0" maxOccurs="1">
                            <xs:complexType>
                              <xs:sequence>
                                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
                              </xs:sequence>
                            </xs:complexType>
                          </xs:element>
                        </xs:all>
                        <xs:attribute name="title" type="StringValidator" />
                      </xs:extension>
                    </xs:complexContent>
                  </xs:complexType>
                </xs:element>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
        <xs:attributeGroup ref="tabViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TabView" type="TabView" />
  <xs:element name="tab-view" type="TabView" />
  <!-- TextBase Section -->
  <xs:attributeGroup name="textBaseAttributes">
    <xs:attribute name="lineHeight" type="NumberValidator" />
    <xs:attribute name="padding" type="NumberValidator" />
    <xs:attribute name="paddingBottom" type="NumberValidator" />
    <xs:attribute name="paddingLeft" type="NumberValidator" />
    <xs:attribute name="paddingRight" type="NumberValidator" />
    <xs:attribute name="paddingTop" type="NumberValidator" />
    <xs:attribute name="letterSpacing" type="NumberValidator" />
    <xs:attribute name="text" type="StringValidator" />
    <xs:attribute name="textAlignment" type="TextAlignmentValidator" />
    <xs:attribute name="textDecorator" type="TextDecorationValidator" />
    <xs:attribute name="textTransform" type="TextTransformValidator" />
    <xs:attribute name="whiteSpace" type="WhiteSpaceValidator" />
    <xs:attribute name="fontSize" type="NumberValidator" />
    <xs:attribute name="formattedText" type="TextTransformValidator" />
  </xs:attributeGroup>
  <xs:complexType name="TextBase">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="textBaseAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextBase" type="TextBase" />
  <xs:element name="text-base" type="TextBase" />
  <!-- Text field Section -->
  <xs:attributeGroup name="textFieldAttributes">
    <xs:attribute name="returnPress" type="StringValidator" />
    <xs:attribute name="secure" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="TextField">
    <xs:complexContent>
      <xs:extension base="EditableTextBase">
        <xs:attributeGroup ref="textFieldAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextField" type="TextField" />
  <xs:element name="text-field" type="TextField" />
  <!--Text veiw Section-->
  <xs:attributeGroup name="textViewAttributes" />
  <xs:complexType name="TextView">
    <xs:complexContent>
      <xs:extension base="EditableTextBase">
        <xs:attributeGroup ref="textViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextView" type="TextView" />
  <xs:element name="text-view" type="TextView" />
  <!--    Time Picker Section-->
  <xs:attributeGroup name="timePickerAttributes">
    <xs:attribute name="hour" type="NumberValidator" />
    <xs:attribute name="minute" type="NumberValidator" />
    <xs:attribute name="time" type="StringValidator" />
    <xs:attribute name="maxHour" type="NumberValidator" />
    <xs:attribute name="maxMinute" type="NumberValidator" />
    <xs:attribute name="minHour" type="NumberValidator" />
    <xs:attribute name="minMinute" type="NumberValidator" />
    <xs:attribute name="minuteInterval" type="NumberValidator" />
  </xs:attributeGroup>
  <xs:complexType name="TimePicker">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="timePickerAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TimePicker" type="TimePicker" />
  <xs:element name="time-picker" type="TimePicker" />
  <!--    Web View Section-->
  <xs:attributeGroup name="webViewAttributes">
    <xs:attribute name="loadStarted" type="StringValidator" />
    <xs:attribute name="loadFinished" type="StringValidator" />
    <xs:attribute name="navigationTypes" type="StringValidator" />
    <xs:attribute name="src" type="StringValidator" />
    <xs:attribute name="canGoBack" type="BooleanValidator" />
    <xs:attribute name="canGoForward" type="BooleanValidator" />
  </xs:attributeGroup>
  <xs:complexType name="WebView">
    <xs:complexContent>
      <xs:extension base="View">
        <xs:attributeGroup ref="webViewAttributes" />
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="WebView" type="WebView" />
  <xs:element name="web-view" type="WebView" />
  <!--    Validator section-->
  <xs:simpleType name="BindingValidator">
    <xs:restriction base="xs:string">
      <xs:pattern value="\{\{.*\}\}" />
      <xs:whiteSpace value="collapse" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="StringValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string" />
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="StatusBarStyleValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="dark" />
          <xs:enumeration value="light" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="StretchValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="initial" />
          <xs:enumeration value="aspectFill" />
          <xs:enumeration value="aspectFit" />
          <xs:enumeration value="fill" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="TextAlignmentValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="initial" />
          <xs:enumeration value="left" />
          <xs:enumeration value="center" />
          <xs:enumeration value="right" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="TextDecorationValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="none" />
          <xs:enumeration value="underline" />
          <xs:enumeration value="line-through" />
          <xs:enumeration value="underline line-through" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="TextTransformValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="initial" />
          <xs:enumeration value="none" />
          <xs:enumeration value="capitalize" />
          <xs:enumeration value="uppercase" />
          <xs:enumeration value="lowercase" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="WhiteSpaceValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="initial" />
          <xs:enumeration value="normal" />
          <xs:enumeration value="nowrap" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="HorizontalAlignmentValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="center" />
          <xs:enumeration value="left" />
          <xs:enumeration value="right" />
          <xs:enumeration value="top" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="VerticalAlignmentValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="center" />
          <xs:enumeration value="middle" />
          <xs:enumeration value="bottom" />
          <xs:enumeration value="stretch" />
          <xs:enumeration value="top" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="OrientationValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="horizontal" />
          <xs:enumeration value="vertical" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="ReturnKeyTypeValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="go" />
          <xs:enumeration value="done" />
          <xs:enumeration value="search" />
          <xs:enumeration value="next" />
          <xs:enumeration value="send" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="VisibilityValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="collapse" />
          <xs:enumeration value="hidden" />
          <xs:enumeration value="visible" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="BooleanValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:boolean" />
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="NumberValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:integer" />
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="ColorValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:pattern value=".*" />
          <xs:enumeration value="transparent" />
          <xs:enumeration value="aliceBlue" />
          <xs:enumeration value="antiqueWhite" />
          <xs:enumeration value="aqua" />
          <xs:enumeration value="aquamarine" />
          <xs:enumeration value="azure" />
          <xs:enumeration value="beige" />
          <xs:enumeration value="bisque" />
          <xs:enumeration value="black" />
          <xs:enumeration value="blanchedAlmond" />
          <xs:enumeration value="blue" />
          <xs:enumeration value="blueViolet" />
          <xs:enumeration value="brown" />
          <xs:enumeration value="burlyWood" />
          <xs:enumeration value="cadetBlue" />
          <xs:enumeration value="chartreuse" />
          <xs:enumeration value="chocolate" />
          <xs:enumeration value="coral" />
          <xs:enumeration value="cornflowerBlue" />
          <xs:enumeration value="cornsilk" />
          <xs:enumeration value="crimson" />
          <xs:enumeration value="cyan" />
          <xs:enumeration value="darkBlue" />
          <xs:enumeration value="darkCyan" />
          <xs:enumeration value="darkGoldenRod" />
          <xs:enumeration value="darkGray" />
          <xs:enumeration value="darkGreen" />
          <xs:enumeration value="darkKhaki" />
          <xs:enumeration value="darkMagenta" />
          <xs:enumeration value="darkOliveGreen" />
          <xs:enumeration value="darkOrange" />
          <xs:enumeration value="DarkOrchid" />
          <xs:enumeration value="darkRed" />
          <xs:enumeration value="darkSalmon" />
          <xs:enumeration value="darkSeaGreen" />
          <xs:enumeration value="darkSlateBlue" />
          <xs:enumeration value="darkSlateGray" />
          <xs:enumeration value="darkTurquoise" />
          <xs:enumeration value="darkViolet" />
          <xs:enumeration value="deepPink" />
          <xs:enumeration value="deepSkyBlue" />
          <xs:enumeration value="dimGray" />
          <xs:enumeration value="dodgerBlue" />
          <xs:enumeration value="fireBrick" />
          <xs:enumeration value="floralWhite" />
          <xs:enumeration value="forestGreen" />
          <xs:enumeration value="fuchsia" />
          <xs:enumeration value="gainsboro" />
          <xs:enumeration value="ghostWhite" />
          <xs:enumeration value="gold" />
          <xs:enumeration value="goldenRod" />
          <xs:enumeration value="gray" />
          <xs:enumeration value="green" />
          <xs:enumeration value="greenYellow" />
          <xs:enumeration value="honeyDew" />
          <xs:enumeration value="hotPink" />
          <xs:enumeration value="indianRed" />
          <xs:enumeration value="indigo" />
          <xs:enumeration value="ivory" />
          <xs:enumeration value="khaki" />
          <xs:enumeration value="lavender" />
          <xs:enumeration value="lavenderBlush" />
          <xs:enumeration value="lawnGreen" />
          <xs:enumeration value="lemonChiffon" />
          <xs:enumeration value="lightBlue" />
          <xs:enumeration value="lightCoral" />
          <xs:enumeration value="lightCyan" />
          <xs:enumeration value="lightGoldenRodYellow" />
          <xs:enumeration value="lightGray" />
          <xs:enumeration value="lightGreen" />
          <xs:enumeration value="lightPink" />
          <xs:enumeration value="lightSalmon" />
          <xs:enumeration value="lightSeaGreen" />
          <xs:enumeration value="lightSkyBlue" />
          <xs:enumeration value="lightSlateGray" />
          <xs:enumeration value="lightSteelBlue" />
          <xs:enumeration value="lightYellow" />
          <xs:enumeration value="lime" />
          <xs:enumeration value="limeGreen" />
          <xs:enumeration value="linen" />
          <xs:enumeration value="magenta" />
          <xs:enumeration value="maroon" />
          <xs:enumeration value="mediumAquaMarine" />
          <xs:enumeration value="mediumBlue" />
          <xs:enumeration value="mediumOrchid" />
          <xs:enumeration value="mediumPurple" />
          <xs:enumeration value="mediumSeaGreen" />
          <xs:enumeration value="mediumSlateBlue" />
          <xs:enumeration value="mediumSpringGreen" />
          <xs:enumeration value="mediumTurquoise" />
          <xs:enumeration value="mediumVioletRed" />
          <xs:enumeration value="midnightBlue" />
          <xs:enumeration value="mintCream" />
          <xs:enumeration value="mistyRose" />
          <xs:enumeration value="moccasin" />
          <xs:enumeration value="mavajoWhite" />
          <xs:enumeration value="mavy" />
          <xs:enumeration value="oldLace" />
          <xs:enumeration value="olive" />
          <xs:enumeration value="oliveDrab" />
          <xs:enumeration value="orange" />
          <xs:enumeration value="orangeRed" />
          <xs:enumeration value="orchid" />
          <xs:enumeration value="paleGoldenRod" />
          <xs:enumeration value="paleGreen" />
          <xs:enumeration value="paleTurquoise" />
          <xs:enumeration value="paleVioletRed" />
          <xs:enumeration value="papayaWhip" />
          <xs:enumeration value="peachPuff" />
          <xs:enumeration value="peru" />
          <xs:enumeration value="pink" />
          <xs:enumeration value="plum" />
          <xs:enumeration value="powderBlue" />
          <xs:enumeration value="purple" />
          <xs:enumeration value="red" />
          <xs:enumeration value="rosyBrown" />
          <xs:enumeration value="royalBlue" />
          <xs:enumeration value="saddleBrown" />
          <xs:enumeration value="salmon" />
          <xs:enumeration value="sandyBrown" />
          <xs:enumeration value="seaGreen" />
          <xs:enumeration value="seaShell" />
          <xs:enumeration value="sienna" />
          <xs:enumeration value="silver" />
          <xs:enumeration value="skyBlue" />
          <xs:enumeration value="slateBlue" />
          <xs:enumeration value="slateGray" />
          <xs:enumeration value="snow" />
          <xs:enumeration value="springGreen" />
          <xs:enumeration value="steelBlue" />
          <xs:enumeration value="tan" />
          <xs:enumeration value="teal" />
          <xs:enumeration value="thistle" />
          <xs:enumeration value="tomato" />
          <xs:enumeration value="turquoise" />
          <xs:enumeration value="violet" />
          <xs:enumeration value="wheat" />
          <xs:enumeration value="white" />
          <xs:enumeration value="whiteSmoke" />
          <xs:enumeration value="yellow" />
          <xs:enumeration value="yellowGreen" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:simpleType name="LayoutValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="StackLayout" />
          <xs:enumeration value="GridLayout" />
          <xs:enumeration value="AbsoluteLayout" />
          <xs:enumeration value="DockLayout" />
          <xs:enumeration value="WrapLayout" />
          <xs:enumeration value="FlexboxLayout" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>   
  <xs:simpleType name="DockValidator">
    <xs:union memberTypes="BindingValidator">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="left" />
          <xs:enumeration value="right" />
          <xs:enumeration value="top" />
          <xs:enumeration value="bottom" />
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
  <xs:group name="UIComponents">
    <xs:choice>
      <xs:element name="ActionBar" type="ActionBar"/>
      <xs:element name="action-bar" type="ActionBar"/>
      <xs:element name="ActionItem" type="ActionItem"/>
      <xs:element name="action-item" type="ActionItem"/>
      <xs:element name="ActivityIndicator" type="ActivityIndicator"/>
      <xs:element name="activity-indicator" type="ActivityIndicator"/>
      <xs:element name="Border" type="Border"/>
      <xs:element name="border" type="Border"/>
      <xs:element name="Button" type="Button"/>
      <xs:element name="button" type="Button"/>
      <xs:element name="ContentView" type="ContentView"/>
      <xs:element name="content-view" type="ContentView"/>
      <xs:element name="Bindable" type="Bindable"/>
      <xs:element name="bindable" type="Bindable"/>
      <xs:element name="View" type="View"/>
      <xs:element name="view" type="View"/>
      <xs:element name="CustomLayoutView" type="CustomLayoutView"/>
      <xs:element name="custom-layout-view" type="CustomLayoutView"/>
      <xs:element name="DatePicker" type="DatePicker"/>
      <xs:element name="date-picker" type="DatePicker"/>
      <xs:element name="EditableTextBase" type="EditableTextBase"/>
      <xs:element name="editable-text-base" type="EditableTextBase"/>
      <xs:element name="HtmlView" type="HtmlView"/>
      <xs:element name="html-view" type="HtmlView"/>
      <xs:element name="Image" type="Image"/>
      <xs:element name="image" type="Image"/>
      <xs:element name="Label" type="Label"/>
      <xs:element name="label" type="Label"/>
      <xs:element name="AbsoluteLayout" type="AbsoluteLayout"/>
      <xs:element name="absolute-layout" type="AbsoluteLayout"/>
      <xs:element name="DockLayout" type="DockLayout"/>
      <xs:element name="dock-layout" type="DockLayout"/>
      <xs:element name="GridLayout" type="GridLayout"/>
      <xs:element name="grid-layout" type="GridLayout"/>
      <xs:element name="LayoutBase" type="LayoutBase"/>
      <xs:element name="layout-base" type="LayoutBase"/>
      <xs:element name="StackLayout" type="StackLayout"/>
      <xs:element name="stack-layout" type="StackLayout"/>
      <xs:element name="WrapLayout" type="WrapLayout"/>
      <xs:element name="wrap-layout" type="WrapLayout"/>
      <xs:element name="ListPicker" type="ListPicker"/>
      <xs:element name="list-picker" type="ListPicker"/>
      <xs:element name="ListView" type="ListView"/>
      <xs:element name="list-view" type="ListView"/>
      <xs:element name="Page" type="Page"/>
      <xs:element name="page" type="Page"/>
      <xs:element name="Placeholder" type="Placeholder"/>
      <xs:element name="placeholder" type="Placeholder"/>
      <xs:element name="Progress" type="Progress"/>
      <xs:element name="progress" type="Progress"/>
      <xs:element name="ProxyViewContainer" type="ProxyViewContainer"/>
      <xs:element name="proxy-view-container" type="ProxyViewContainer"/>
      <xs:element name="Repeater" type="Repeater"/>
      <xs:element name="repeater" type="Repeater"/>
      <xs:element name="ScrollView" type="ScrollView"/>
      <xs:element name="scroll-view" type="ScrollView"/>
      <xs:element name="SearchBar" type="SearchBar"/>
      <xs:element name="search-bar" type="SearchBar"/>
      <xs:element name="SegmentedBar" type="SegmentedBar"/>
      <xs:element name="segmented-bar" type="SegmentedBar"/>
      <xs:element name="Slider" type="Slider"/>
      <xs:element name="slider" type="Slider"/>
      <xs:element name="Switch" type="Switch"/>
      <xs:element name="switch" type="Switch"/>
      <xs:element name="TabView" type="TabView"/>
      <xs:element name="tab-view" type="TabView"/>
      <xs:element name="TextBase" type="TextBase"/>
      <xs:element name="text-base" type="TextBase"/>
      <xs:element name="TextField" type="TextField"/>
      <xs:element name="text-field" type="TextField"/>
      <xs:element name="TextView" type="TextView"/>
      <xs:element name="text-view" type="TextView"/>
      <xs:element name="TimePicker" type="TimePicker"/>
      <xs:element name="time-picker" type="TimePicker"/>
      <xs:element name="WebView" type="WebView"/>
      <xs:element name="web-view" type="WebView"/>
    </xs:choice>
  </xs:group>
  <xs:group name="UILayouts">
    <xs:choice>
      <xs:element name="AbsoluteLayout" type="AbsoluteLayout" />
      <xs:element name="absolute-layout" type="AbsoluteLayout" />
      <xs:element name="DockLayout" type="DockLayout" />
      <xs:element name="dock-layout" type="DockLayout" />
      <xs:element name="GridLayout" type="GridLayout" />
      <xs:element name="grid-layout" type="GridLayout" />
      <xs:element name="StackLayout" type="StackLayout" />
      <xs:element name="stack-layout" type="StackLayout" />
      <xs:element name="WrapLayout" type="WrapLayout" />
      <xs:element name="wrap-layout" type="WrapLayout" />
      <xs:element name="FlexLayout" type="FlexboxLayout" />
      <xs:element name="Flex-layout" type="FlexboxLayout" />
    </xs:choice>
  </xs:group>
</xs:schema>
`