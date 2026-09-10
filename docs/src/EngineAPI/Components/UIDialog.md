### UIDialog

A modal style dialog with a header, a title, a close button and a content area. It extends [UIElement](/EngineAPI/Components/UIElement). Child UI elements render inside the dialog's content area, and you can optionally let the user drag it around by its header.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| showHeader | checkbox | `true` | Whether the header is visible. |
| title | text | `Dialog` | The dialog title. |
| showTitle | checkbox | `true` | Whether the title is visible. |
| titleFontSize | number | `1.2` | Title font size in rem. |
| titleFontWeight | select | `inherit` | Title font weight. |
| titleColor | color | `#ffffff` | Title color. |
| showCloseButton | checkbox | `true` | Whether the close button is visible. |
| closeButtonSize | number | `1.4` | Close button size in rem. |
| closeButtonColor | color | `#ffffff` | Close button color. |
| draggable | checkbox | `false` | Let the user drag the dialog by its header. |
| positionX | number (0 to 100) | `50` | Horizontal position as a percentage. |
| positionY | number (0 to 100) | `50` | Vertical position as a percentage. |
| zIndex | number | `100` | The stacking order. |

### Methods

- `open()`: shows the dialog.
- `close()`: hides the dialog.

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props.
