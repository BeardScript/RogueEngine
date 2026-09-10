### UIInput

A text input field. It extends [UIElement](/EngineAPI/Components/UIElement) and renders a real HTML input, so it handles text, numbers, passwords and so on. Read and write the value through the `value` prop.

Keyboard input is kept from leaking to the 3D scene while you type in play mode.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| placeholder | text | `""` | The placeholder text. |
| value | text | `""` | The input value. |
| inputType | select | `text` | `text`, `number`, `email`, `password`, `search` or `url`. |
| maxLength | number | `524288` | Maximum input length. |
| fontSize | number | `1` | Font size in rem. |
| fontWeight | select | `inherit` | The font weight. |
| fontColor | color | `#ffffff` | The text color. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with pointer capture and navigation on by default.
