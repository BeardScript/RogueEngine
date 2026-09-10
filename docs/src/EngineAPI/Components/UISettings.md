### UISettings

Global settings for the UI system: the navigation focus visuals, the gamepad repeat behavior and the custom cursor. It's not a widget, it configures the shared UI state. Drop one in your scene and tune it.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| focusColor | color | `#4a9eff` | The focus ring color. |
| focusStyle | select | `glow` | How focus is shown: `outline`, `glow`, `underline` or `background`. |
| focusWidth | number (1 to 4) | `3` | The focus ring width. |
| activeColor | color | `#ffaa00` | The color of the currently active element. |
| activeStyle | select | `glow` | How activation is shown. |
| activeWidth | number (1 to 6) | `3` | The active ring width. |
| navRepeatDelay | number (100 to 600) | `450` | Milliseconds before holding a nav key starts repeating. |
| navRepeatRate | number (20 to 200) | `60` | Milliseconds between repeats. |
| bumperCyclesSelectors | checkbox | `true` | Gamepad bumpers cycle selectors. |
| cursors | texture map | `{}` | Named cursor textures. |
| defaultCursor | select | `''` | The default cursor. |
| cursorHotspots | vector2 map | `{}` | The hotspot of each named cursor. |

### Static

- `setCursor(name)`: sets the current custom cursor from the cursors map, or a CSS keyword.
- `getCursor()` / `getCursorKeys()` / `getCursorCSS(name)`: query the cursor state.
