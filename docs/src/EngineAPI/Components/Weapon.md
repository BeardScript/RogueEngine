### Weapon

The base weapon component. It fires [Projectile](/EngineAPI/Components/Projectile) prefabs from its barrels, manages the magazine, overheat and reload, spawns muzzle flashes and plays fire and reload sounds.

The base class fires projectiles and resolves hits, but it leaves the actual damage to you through the `onHit` hook. Override it or reassign it in a subclass, which is the usual pattern:

```typescript
import * as RE from 'rogue-engine';

export class MyWeapon extends RE.Weapon {
  onHit = (projectile: RE.Projectile, hits: THREE.Intersection[]) => {
    const hitSpot = projectile.hitSpot;
    hitSpot && hitSpot.applyDamage(this.damage, projectile.team);
  }
}
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| firingMode | select | `0` | `Semi-Auto` or `Auto`. |
| damage | number | `20` | The damage carried by the weapon. You apply it in `onHit`. |
| shots | number | `1` | Shots per trigger pull. |
| spread | number | `0` | Random spread applied to each shot. |
| fireRate | number | `250` | Milliseconds between shots. |
| projectilePrefab | prefab | | The prefab fired per shot. Must carry a Projectile. |
| barrels | object3d list | `[]` | The barrels to fire from. Empty fires from this object. |
| barrelFireMode | select | `0` | `All` or `Alternating`. |
| muzzleFlash | prefab | | Instantiated at the barrel on each shot. |
| muzzleFlashScale | vector3 | `(1, 1, 1)` | Scale of the muzzle flash. |
| muzzleFlashRollDeg | number | `90` | Random roll applied to the flash so it doesn't repeat exactly. |
| fireSFX | PositionalAudio | | The fire sound. |
| detuneRange | number (0 to 500) | `100` | Random detune in cents so shots don't sound identical. |
| fireSFXRolloff | number (0 to 0.5) | `0.07` | The fire sound rolloff. |
| reloadSFX | PositionalAudio | | The reload sound. |
| reloadTime | number | `2000` | Reload duration in milliseconds. |
| magSize | number | `30` | Rounds per magazine. |
| totalRounds | number | `150` | Total reserve ammo. |
| curRounds | number | `150` | Current reserve ammo. |
| loadedRounds | number | `30` | Rounds currently loaded. |
| autoReload | checkbox | `true` | Reload automatically when empty. |
| magType | select | `0` | `Rounds`, `Overheat` or `Rounds & Overheat`. |
| heatPerShot | number | `10` | Heat added per shot. |
| maxHeat | number | `100` | Heat at which the weapon overheats. |
| cooldownRate | number | `25` | Heat lost per second. |
| curHeat | number | `0` | Current heat. |
| idleAnimation, aimAnimation, attackAnimation, reloadAnimation | animation | | Optional view model clips. |

### Methods

- `shoot()`: fires the weapon. Consumes ammo or heat and spawns projectiles from the barrels.
- `reload()`: starts a reload, if there's ammo to load.
- `canShoot(): boolean`: whether the weapon can fire right now.
- `setAim`: raycasts forward from the camera and stores the aim point.
- `setIgnoredMeshes(...objects)`: objects the projectiles should pass through.
- `spawnProjectile(barrel)`: instantiates the projectile prefab from the given barrel.

### Properties

- `onHit = (projectile, hits) => {}`: called when a spawned projectile hits something. Override it to deal damage.
- `isReloading: boolean`: whether the weapon is reloading.
- `usesRounds: boolean` / `usesOverheat: boolean`: reflect the mag type.
- `team?: string`: the team of the nearest ancestor [Character](/EngineAPI/Components/Character).
- `aim: Object3D`: the current aim point object.
