### CSS2D

Renders an HTML label positioned in 3D space, as a screen space overlay that always faces the camera. It uses three.js's CSS2DRenderer under the hood.

The real trick is that you can nest UI objects under an object that carries this component. The whole UI subtree renders through the label, so you get a full interface floating in the world, on top of the screen. See the [UI](/Workflow/UI) guide.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| content | code (html) | `Hello World!` | The label content. When a UI element is attached, this is ignored. |
| offset | vector3 | `(0, 1, 0)` | The label offset from the object. |

### Properties

- `div`: the root label div.
- `htmlui`: the attached UI element, if any.
