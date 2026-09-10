### UIButton

A clickable button with a text label. It extends [UIElement](/EngineAPI/Components/UIElement) and renders a real HTML button, so it handles clicks, keyboard activation and gamepad activation out of the box.

To react to a press, either add a script that listens to the button, or give it a child object with a component. You can also just check the label and set up your own click handling on `element`.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| label | text | `Button` | The button label. |
| fontSize | number | `1` | Font size in rem. |
| fontWeight | select | `inherit` | The font weight. |
| fontColor | color | `#ffffff` | The label color. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with pointer capture, navigation and a pointer cursor on by default.
