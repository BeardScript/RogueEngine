### Projectile

A projectile that never goes through a mesh. Every frame it sweeps a ray from its previous position to its new one and resolves the first meaningful hit, so even fast projectiles catch what they pass through.

It's picky about what counts as a hit. Invisible geometry is skipped, unless it carries a [HitSpot](/EngineAPI/Components/HitSpot) or is a generated [HitMesh](/EngineAPI/HitMesh) piece. Co located hit mesh pieces are treated as real surfaces and preferred, so shots land on the posed body where you actually aimed.

When a [Weapon](/EngineAPI/Components/Weapon) fires this, it reports hits back through the weapon's `onHit`.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| speed | number | `5` | Speed in units per second. |
| hitFX | prefab | | The fallback impact prefab, dropped when no surface FX matches. |
| intensity | number | `1` | Scales spawned impact effects. |
| surfaceFXName | text | `""` | The name of the [SurfaceFXManager](/EngineAPI/Components/SurfaceFXManager) to use. Empty finds the first one in the scene. |

### Properties

- `weapon?: Weapon`: the weapon that fired this projectile.
- `team?: string`: the team of the firer, resolved from the weapon.
- `hitSpot?: HitSpot`: the hit region that was struck, when there is one.
- `surfaceFX?: SurfaceFXManager`: the surface FX manager this projectile uses.
- `onHit = (hits) => {}`: called when the projectile hits something, after contact FX resolve.

### Methods

- `setIgnoredMeshes(...objects)`: objects the projectile should pass through.
- `filterHits(hits)`: the projectile's own hit filtering, exposed if you need it.
