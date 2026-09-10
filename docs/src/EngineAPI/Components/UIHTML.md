### UIHTML

Renders inline HTML, or HTML loaded from a static asset file. It extends [UIElement](/EngineAPI/Components/UIElement). Handy when you want to drop in custom markup that the other widgets don't cover.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| staticPath | code (html) | `""` | A path to a static HTML file. When set, it's fetched and rendered. |
| html | code (html) | `"<div>Hello</div>"` | The inline HTML to render when no path is set. |
| refresh | button | | Re-fetches and re-renders the content. |

### Methods

- `setHTMLContent()`: (re)renders the content. Fetches the static path when set, otherwise writes the inline HTML.
