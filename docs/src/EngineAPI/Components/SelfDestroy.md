### SelfDestroy

Automatically removes the object this component is attached to after a short delay. Perfect for temporary spawns like impact effects, projectiles, pickups, muzzle smoke or decals.

The countdown only runs while the scene is playing, so editing doesn't accidentally delete your objects.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| lifetime | number | `0.3` | Seconds before the object is removed. |

### Methods

- `destroy()`: removes the host object (and its children) from the scene right away.
