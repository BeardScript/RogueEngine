### UI

Rogue Engine includes a full HTML based UI system, built in. It's fast, fully customizable, and comes with objects you can drop in your hierarchy to create any kind of interface you can think of.

A UI widget is just a component on an object, and nesting UI mirrors nesting objects. A **UI Container** with a couple of **UI Buttons** as children is a container whose DOM holds the buttons' DOM. If you've worked with the HTMLUI package before, this is a greatly improved version of it, with keyboard and gamepad navigation, custom cursor support and more.

### Adding UI

The easiest way to start is the Add Object dialog (Alt/Opt + O). Look for the UI section, where you'll find pre-built objects for every widget, like **UI Container**, **UI Button**, **UI Text** or **UI Slider**. You can also add any of them as plain components from the Add Component list.

The top level UI renders as a full screen overlay in the runtime. Put a UI Container as a root to lay things out, then nest the rest inside it.

### The widgets

- [UIElement](/EngineAPI/Components/UIElement) is the base for all widgets. It holds the shared layout, appearance, font and navigation props.
- [UIContainer](/EngineAPI/Components/UIContainer) is a flexbox layout container, the main way to arrange things.
- [UIText](/EngineAPI/Components/UIText) is a styled text label.
- [UIButton](/EngineAPI/Components/UIButton) is a clickable button with a label.
- [UIInput](/EngineAPI/Components/UIInput) is a text input field.
- [UICheckbox](/EngineAPI/Components/UICheckbox) is a checkbox with a label.
- [UISlider](/EngineAPI/Components/UISlider) is a slider with a value label and optional marks.
- [UIDropdown](/EngineAPI/Components/UIDropdown) is a dropdown menu.
- [UISelector](/EngineAPI/Components/UISelector) cycles through options with previous and next arrows.
- [UIProgressBar](/EngineAPI/Components/UIProgressBar) shows a fill fraction.
- [UITabs](/EngineAPI/Components/UITabs) switches between child elements, one at a time.
- [UIDialog](/EngineAPI/Components/UIDialog) is a modal dialog with a title bar and content.
- [UIHTML](/EngineAPI/Components/UIHTML) renders raw HTML, from a string or a static file.
- [UIStyle](/EngineAPI/Components/UIStyle) injects raw CSS into the UI.

To style things, most widgets expose their own colors, borders, fonts and padding right in the inspector, so you can go far without writing any CSS. When you need more, drop a UIStyle with your own CSS or use UIHTML for custom markup.

### Sizing and layout

Every element has **widthMode** and **heightMode** (`auto`, `fill`, `fit-content` and so on), plus **padding**, **margin**, **scale**, **rotation** and **pivot**. Containers add flow, alignment and gap, so you compose layouts the way you'd write flexbox, just from the inspector.

A note on units: sizes are in `rem` by default, which scale with the UI. If you prefer pixels, you can override the base font size of the UI container in your CSS.

### UI in 3D

Two special components take UI out of the overlay and put it in the world:

- [CSS2D](/EngineAPI/Components/CSS2D) renders a UI element as a screen space label anchored to an object. Great for floating markers that always face you.
- [HTMLMeshComponent](/EngineAPI/Components/HTMLMeshComponent) bakes a UI subtree into a real 3D mesh you can touch. This is the one for WebXR: your buttons live in the scene, and you can press them with a controller.

You nest UI objects under an object that carries one of these, and the whole subtree renders through it automatically.

### Navigation

UI elements that are meant to be interacted with are navigable by default. That means keyboard and gamepad navigation just works: move between elements with the arrows or a gamepad, confirm with Enter, Space or a button, and cancel with Escape.

The [UISettings](/EngineAPI/Components/UISettings) component controls the global navigation feel: the focus and active colors and styles, the gamepad repeat behavior, and the custom cursor. Drop one in your scene to tune it.

### Driving UI from code

Every widget is exported from `rogue-engine`, so you can read and change it at runtime. Get the component the usual way and set its props:

```typescript
import * as RE from 'rogue-engine';
import * as THREE from 'three';
...
const healthBar = RE.UIProgressBar.get(this.object3d);
healthBar.progress = 0.6;

const hpText = RE.UIText.get(this.object3d);
hpText.text = "Health: 60%";
```

Hiding an element also works from the object itself: toggle the object's `visible` and the widget follows.
