### Decal

A drop in surface decal for impact prefabs: bullet holes, scorches, burns, that kind of thing. Add it to an impact prefab and when the prefab spawns, the Decal finds the surface underneath and marks it, so the mark sticks, follows the surface if it moves, and fades out after its life.

**placement** decides how the mark is built. **Auto** (the default) checks the surface and only conforms when it has to. **Flat** marks all share one plane geometry, so they batch and cost almost nothing, which is what you want for bullet holes on walls and floors. **Conforming** marks are cut from the surface geometry, so they follow curves exactly, at the cost of unique geometry that never batches.

Marks don't stack on top of each other, and they hold their shape on edges, corners and surfaces with a non uniform scale. On a skinned mesh a mark is pinned to the nearest bone, so it rides the limb it landed on. It plays well with [SelfDestroy](/EngineAPI/Components/SelfDestroy) on the same prefab.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| material | material | | The decal material. Empty generates a soft dark disc fallback. |
| size | number | `0.1` | The mark size in world units. |
| life | number | `2` | Seconds before the mark fades out. `0` keeps it until the scene resets. |
| fadeTime | number | `1` | The fade out duration. `0` removes it instantly. |
| randomRotate | checkbox | `true` | Randomly rolls each mark around the surface normal so they don't look stamped. |
| placement | select | `auto` | How the mark is built: `auto`, `flat` or `conforming`. |
| flatness | number (0 to 90) | `12` | How far the surface may tilt across the mark before `auto` conforms, in degrees. |
| frames | number list | `[]` | Layers of the material's texture array to draw from, one picked at random per mark. |
