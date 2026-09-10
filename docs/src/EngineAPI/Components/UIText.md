### UIText

A styled text label. It extends [UIElement](/EngineAPI/Components/UIElement). Change what it says at runtime through the `text` prop.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| text | text | `Hello World` | The label text. |
| fontSize | number | `1` | Font size in rem. |
| fontWeight | select | `inherit` | The font weight. |
| fontColor | color | `#ffffff` | The text color. |
| textAlign | select | `left` | Text alignment. |
| lineHeight | number | `1.5` | Line height. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with a default width mode of `fit-content`.
