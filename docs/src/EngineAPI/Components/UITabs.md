### UITabs

Tabs that switch between child UI elements, one at a time. It extends [UIElement](/EngineAPI/Components/UIElement). Each child object of the tabs becomes one tab, labeled with the child's name, and its UI content shows when its tab is active.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| tabPosition | select | `top` | Where the tab bar sits: `top`, `bottom`, `left` or `right`. |
| activeTab | number | `0` | The active tab index. |
| showTabs | checkbox | `true` | Whether the tab bar is visible. |
| tabAlign | select | `start` | Tab bar alignment: `start`, `center` or `end`. |
| tabFontColor | color | `#ffffff` | The tab label color. |
| tabColor | color | `transparent` | The per tab background. |
| tabBarColor | color | `transparent` | The tab bar background. |
| tabFontSize | number | `1` | Tab font size in rem. |
| buttonsCursor | select | `pointer` | The cursor over the tabs. |

### Methods

- `switchTab(target)`: switches to a tab by index or by child object name.
- `rebuild()`: rebuilds the tabs. Call it after adding or removing children at runtime.

It inherits all the shared [UIElement](/EngineAPI/Components/UIElement) props.
