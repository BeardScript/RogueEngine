### Switch

Switches between a set of objects, activating one at a time. Great for character customization screens, or swapping between different models of the same thing.

It can switch by **visibility** or by **enabled** state. With visibility it just hides and shows objects. With enabled state it uses [setEnabled](/EngineAPI/Functions#setenabled), which also stops their components from running.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| mode | select | `visible` | `visible` or `enabled`. |
| objects | object3d list | `[]` | The objects to switch between. Empty uses the object's children. |
| selected | select | `NONE` | Which object is active: `NONE`, `FIRST`, an index, or an object name. |

### Methods

- `select(nameOrIndex)`: activates a single target by index, name, `FIRST` or `NONE`, and deactivates all the others.
- `getTargets()`: the objects the switch operates on.
- `getSelectedOptions()`: the current selectable options.
- `applySelection()`: re-applies the selected value. Handy after changing the objects list.
