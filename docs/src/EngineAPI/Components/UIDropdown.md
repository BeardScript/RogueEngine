### UIDropdown

A dropdown menu with selectable options. It extends [UIElement](/EngineAPI/Components/UIElement). Edit the `options` list and read the picked one with `selected`, which is the index into that list.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| selected | select | `0` | The index of the selected option. |
| options | text list | `[Option 1, Option 2, Option 3]` | The list of options. |
| fontSize | number | `1` | Font size in rem. |
| fontWeight | select | `inherit` | The font weight. |
| fontColor | color | `#ffffff` | The text color. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with pointer capture and navigation on by default.
