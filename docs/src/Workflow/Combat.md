### Combat

1.2.0 is the gameplay release: shooting, being shot, and everything around it. It comes with a full weapon pipeline out of the box, plus damageable characters, hit regions and surface aware impact effects.

The pieces are:

- [Character](/EngineAPI/Components/Character): health, shield, armor and stamina, with regen and a team system.
- [Weapon](/EngineAPI/Components/Weapon): fires projectile prefabs from barrels, with a magazine, overheat and reload.
- [Projectile](/EngineAPI/Components/Projectile): a fast projectile that never goes through a mesh.
- [HitSpot](/EngineAPI/Components/HitSpot): damage regions that multiply incoming damage. This is how you make headshots count.
- [SurfaceFXManager](/EngineAPI/Components/SurfaceFXManager): spawns surface aware impact effects.

And under the hood, [HitMesh](/EngineAPI/HitMesh) and [BVH](/EngineAPI/BVH) make it all raycast friendly.

### Making something you can shoot at

Add a **Character** component to an object and it becomes damageable. It brings **hp**, **shield** and **armor**, plus **stamina** if you want to gate actions like sprinting. Each stat has a regen rate and a regen wait, so a character recovers after a few seconds without taking damage.

Shield absorbs damage first, then armor kicks in. Armor mitigation follows a curve, so stacking armor gives diminishing returns instead of making you invincible. The curve constant lives in `Character.armorConstant` if you want to tune it.

Characters belong to a **team** (Team 1 through Team 6), and friendly fire is a global setting on `Character.friendlyFire`. Set it to `None`, `Friendly` or `All` and configure which teams are friends or foes with `Character.setFriendly()` and `Character.setHostile()`. The whole system respects it, so shots between friendly teams don't deal damage unless you allow it.

### A weapon that fires projectiles

Add a **Weapon** to your gun object and set its **projectilePrefab** to a prefab that carries a **Projectile** component. That's the minimum. When the weapon shoots, it instantiates the prefab from its barrels and the projectile does the rest.

A few things worth knowing:

- **Barrels** are a list of objects. Leave it empty and the weapon fires from its own object. Add several and it alternates or fires from all of them, depending on **barrelFireMode**.
- **firingMode** gives you semi auto or full auto, with **fireRate** in milliseconds between shots and **spread** if you want some inaccuracy.
- Ammo lives in the **magSize**, **loadedRounds** and **totalRounds** fields, with **autoReload** when you run dry. Or switch **magType** to overheat and you get a heat based weapon instead, with **heatPerShot**, **maxHeat** and **cooldownRate**.
- **muzzleFlash** can be a prefab spawned at the barrel on each shot, and **fireSFX** and **reloadSFX** give it sound. If you want view model animations, there are fields for idle, aim, attack and reload clips.
- Point it where it should aim. The weapon aims from the active camera forward and you can mark what it should ignore with `setIgnoredMeshes()`.

The base weapon fires projectiles and resolves hits, but it leaves damage to you. When a projectile hits, the weapon's `onHit` hook fires with the projectile and the hit results. Override it or reassign it to actually deal damage. The usual pattern in a subclass goes something like:

```typescript
import * as RE from 'rogue-engine';

export class MyWeapon extends RE.Weapon {
  onHit = (projectile: RE.Projectile, hits: THREE.Intersection[]) => {
    const hitSpot = projectile.hitSpot;
    // Deal our damage, multiplied by the hit region.
    hitSpot && hitSpot.applyDamage(this.damage, projectile.team);
  }
}
```

### Hit regions that multiply damage

Put a **HitSpot** on a body part and give it a **multiplier**. A head with a multiplier of 2 means headshots deal twice the damage. When a projectile hits that spot, it applies `damage * multiplier` to the nearest **Character** in an ancestor, so you can keep all your hit regions nested under the character object and they just work.

### Projectiles that never ghost through walls

The **Projectile** component sweeps a ray from its previous position to its new one every frame, so even at high **speed** it catches what it passes through instead of tunneling.

It's picky about what counts as a hit:

- It skips invisible geometry, unless that geometry is a hit region or a generated hit mesh piece.
- It treats co located hit mesh pieces as real surfaces and prefers them, so shots land on the posed body where you actually aimed, not on the bind pose.

Give the projectile a **hitFX** prefab for a generic impact, and it'll drop it on the surface, oriented along the normal. If there's a **SurfaceFXManager** around it can use that instead for surface aware effects.

### Surface aware impact effects

Add a **SurfaceFXManager** to your scene and map surface tags to contact prefabs. When something hits a surface, the manager walks that object and its ancestors, reads their tags, and spawns the matching prefab oriented to the hit. Surfaces without a matching tag fall back to the **defaultContact** prefab if you set one, and produce nothing otherwise.

This is where decals come in. A **Decal** component on your impact prefab makes the effect stick to the surface it lands on: a bullet hole that conforms to the wall and rides it if the wall moves.

### Getting clean hits on posed characters

For raycasts to land on animated characters where the projectiles actually aim, generate hit meshes for your models. In the Project view, right click a 3D model file and choose **Generate Hit Mesh**. The engine splits each skinned mesh into invisible rigid pieces, one per bone, parented under those bones, so they follow the animation exactly. Every piece gets its own BVH, so raycasting stays fast on dense scenes.

The pieces are saved with the model and regenerated when it's rehydrated, with any components you added to them preserved. So you can drop a HitSpot on a piece and it survives reloads.

### Putting it together

1. Make a target: an object with a **Character** component, and a few children with **HitSpot** components for head and body.
2. Make a gun: an object with a **Weapon** component, pointing at a prefab that carries a **Projectile**.
3. Drop a **SurfaceFXManager** into the scene and map a tag or two to impact prefabs.
4. Generate hit meshes for your animated models so everything hits where it should.
5. Shoot.

If you want a ready made starting point, the Aircraft and FPS templates in the new project window come with all of this wired up.
