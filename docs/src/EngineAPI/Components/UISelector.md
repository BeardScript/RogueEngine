### UISelector

A previous and next selector that cycles through options. It extends [UIElement](/EngineAPI/Components/UIElement). Edit the `options` list and read the picked one with `selected`, the index into that list. Left and right arrows, or a gamepad, step through it.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| selected | select | `0` | The index of the selected option. |
| options | text list | `[Option 1, Option 2, Option 3]` | The list of options. |
| cycle | checkbox | `true` | Wrap around at the ends. |
| animate | checkbox | `true` | Animate between options. |
| animSpeed | number (0.05 to 0.5) | `0.15` | The animation speed in seconds. |
| fontSize | number | `1` | Font size in rem. |
| fontWeight | select | `inherit` | The font weight. |
| fontColor | color | `#ffffff` | The text color. |
| arrowSize | number (0.5 to 3) | `1.5` | The arrow size in em. |
| arrowColor | color | `#ffffff` | The arrow color. |
| justifyContent | select | `space-between` | How the arrows and label spread out. |
| gap | number (0 to 3) | `0.1` | The gap between elements in rem. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with pointer capture and navigation on by default.
