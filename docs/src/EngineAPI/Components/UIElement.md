### UIElement

The base class for all UI widgets. It renders an `HTMLElement` into the runtime UI and exposes the shared layout, appearance, font, cursor and navigation props that every widget inherits.

Nesting UI mirrors nesting objects. A widget on an object becomes a child of the widget on its parent object, and the top level UI renders as a full screen overlay. See the [UI](/Workflow/UI) guide to get started.

To change something at runtime, get the component and set its props:

```typescript
import * as RE from 'rogue-engine';
...
const label = RE.UIText.get(this.object3d);
label.text = "Hello";
```

### Shared Props

| Prop | Type | Default | Description |
|---|---|---|---|
| widthMode | select | `auto` | The width mode. |
| heightMode | select | `auto` | The height mode. |
| minWidth | number | `0` | Minimum width in rem. |
| scale | number (0 to 2) | `1` | Element scale. |
| padding | vector2 | `(0, 0)` | Padding in rem. |
| margin | vector2 | `(0, 0)` | Margin in rem. |
| rotation | number | `0` | Rotation in degrees. |
| pivot | select | `center` | The transform origin. |
| backgroundColor | color | `transparent` | The background color. |
| blur | number (0 to 50) | `0` | Backdrop blur in pixels. |
| backgroundImage | texture | | An optional background image. |
| borderWidth | number | `0` | Border width in pixels. |
| borderColor | color | `#ffffff` | Border color. |
| borderRadius | number | `0` | Corner radius in pixels. |
| opacity | number (0 to 1) | `1` | Element opacity. |
| fontFamily | select | `inherit` | The font family. |
| customFont | text | `""` | A custom font family name. |
| visible | checkbox | `true` | Whether the element is visible. |
| classes | text list | `[]` | Extra CSS classes to apply. |
| cursor | select | `inherit` | The cursor when hovering. |
| cursorOffset | number (-1 to 1) | `0` | Where the cursor sits on the element. |
| capturePointer | checkbox | `false` | Stop pointer events from leaking to the scene. |
| navigable | checkbox | `false` | Whether keyboard and gamepad can focus this element. Interactive widgets default to true. |

### Properties

- `element: HTMLElement`: the root DOM node of the widget.
- `pointerUp: boolean`: true on the frame a pointer is released over the element. The editor uses this for selection.

### Methods

- `refreshDOM()`: reattaches the element to the DOM without resetting its styles. Used when reordering in the editor.
