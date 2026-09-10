### DirectionalLight

For directional lights. It makes the light follow a target object so the shadows move with your view instead of swimming all over the place.

It keeps a fixed target to light world offset, follows the target's movement, and snaps the shadow camera to texel sized steps. That's what keeps the shadows rock solid instead of trembling half a texel every frame.

Every Directional Light in the editor gets this component by default.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| target | object3d | | The object the light should point at and follow. |

### Methods

- `translateLight()`: moves the light to follow the target and keeps the shadows snapped to the texel grid.
- `changeTarget()`: binds to a new target, preserving the current world offset.

### Properties

- `object3d: THREE.DirectionalLight`: typed access to the light.
- `trueTarget: Object3D`: the actual object the light's target follows.
