### UISlider

A slider for numeric values in a range, with a fill, a draggable thumb, a value label and optional tick marks. It extends [UIElement](/EngineAPI/Components/UIElement). Read and set the value through the `value` prop.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| value | number (0 to 1) | `0.5` | The current value, clamped between min and max. |
| min | number | `0` | The minimum value. |
| max | number | `1` | The maximum value. |
| step | number | `0.1` | The step between values. |
| trackColor | color | `#ffffff` | The color of the filled track. |
| thumbColor | color | `#ffffff` | The color of the thumb. |
| trackBackground | color | `rgba(255,255,255,0.15)` | The color of the empty track. |
| trackHeight | number (0.1 to 1.1) | `0.9` | The track height in rem. |
| showValue | checkbox | `true` | Show the current value label. |
| valuePosition | select | `thumb` | Where the value label sits: `thumb`, `right` or `left`. |
| valuePrecision | number (0 to 6) | `2` | Decimals shown on the value label. |
| valueColor | color | `#ffffff` | The value label color. |
| fontSize | number (0.6 to 1) | `0.7` | The value label font size in rem. |
| showMarks | checkbox | `true` | Show tick marks. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with pointer capture and navigation on by default.
