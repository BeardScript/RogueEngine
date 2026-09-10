### UIProgressBar

A progress bar that shows a fill fraction. It extends [UIElement](/EngineAPI/Components/UIElement). Set `progress` between 0 and 1 and the fill follows. Great for health bars, loading bars and cooldowns.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| progress | number (0 to 1) | `1` | The fill fraction. |
| fillColor | color | `rgba(255,255,255,0.3)` | The color of the fill. |

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props, with a subtle translucent background by default.
