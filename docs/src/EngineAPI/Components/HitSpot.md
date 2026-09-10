### HitSpot

A damage region on a damageable object. Put it on a body part and give it a **multiplier**, and hits on that spot apply damage times the multiplier to the nearest [Character](/EngineAPI/Components/Character) in an ancestor. That's how you make headshots count.

It works great on [HitMesh](/EngineAPI/HitMesh) pieces too, since those get regenerated with the components you add to them. Put a HitSpot on the head piece and it stays with the model.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| multiplier | number | `1` | The damage multiplier of this region. |

### Methods

- `applyDamage(damage, attackerTeam?)`: applies `damage * multiplier` to the nearest ancestor Character. This is what [Projectiles](/EngineAPI/Components/Projectile) resolve to.
