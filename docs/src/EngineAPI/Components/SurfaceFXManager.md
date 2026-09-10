### SurfaceFXManager

Spawns surface aware contact effects at an impact point. Add one to your scene and map surface tags to contact prefabs. When something hits a surface, the manager walks that object and its ancestors, reads their tags, and spawns the matching prefab, oriented to the hit.

Surfaces without a matching tag fall back to the **defaultContact** prefab if you set one, and produce nothing otherwise. That's what makes a [Projectile](/EngineAPI/Components/Projectile) fall back to its own `hitFX`.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| defaultContact | prefab | | The fallback contact prefab for unmatched surfaces. |
| contacts | prefab map | `{}` | Maps surface tags to contact prefabs. |

### Methods

- `getContact(name)`: direct lookup in the contacts map.
- `getContactFor(object)`: walks the object and its ancestors reading their tags and returns the first matching contact prefab.
- `playContact(object, point, normal?, intensity = 1)`: spawns the right contact prefab at the point, scaled by intensity and oriented along the normal. Returns the spawned object, or `undefined` when no prefab matched.
