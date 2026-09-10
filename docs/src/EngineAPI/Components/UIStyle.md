### UIStyle

Injects raw CSS (and HTML) into the runtime UI. It's not a UIElement, so it has no layout of its own. Add it anywhere and its content is prepended to the UI container when the scene plays.

This is the escape hatch when the inspector props aren't enough. Write plain CSS targeting the widget classes, like `.htmlui-btn` for buttons.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| css | code (html) | `"<style>\n\n</style>"` | The CSS to inject, wrapped in a style tag. |
