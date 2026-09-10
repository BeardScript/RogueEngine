### UIContainer

A flexbox layout container, the main way to arrange UI. It extends [UIElement](/EngineAPI/Components/UIElement). Child UI elements on its child objects render inside it, so you build your layout by nesting containers.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| place | select | `fill` | Where the container sits inside its parent: `fill`, `top`, `bottom`, `left`, `right`, `center`, or the corners. |
| flow | select | `column` | `column` or `row`. Which direction children flow. |
| gap | number | `0` | The gap between children, in rem. |
| align | select | `center` | Cross axis alignment: `flex-start`, `center`, `flex-end` or `stretch`. |
| scroll | select | `never` | Scrolling behavior: `never`, `always`, `vertical`, `horizontal` or `both`. |
| allowChildNav | checkbox | `true` | Whether children can be navigated with keyboard and gamepad. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with a default padding of `(0.4, 0.4)` and a `flex` display.
