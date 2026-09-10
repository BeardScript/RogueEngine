### Decal

A drop in surface decal for impact prefabs: bullet holes, scorches, burns, that kind of thing. Add it to an impact prefab and when the prefab spawns, the Decal finds the surface mesh underneath, builds a conforming geometry from the surface's own triangles, and parents itself to it. So the mark sticks to the surface, follows it if it moves, and fades out after its life.

On skinned meshes it falls back to a flat sticker pinned to the nearest bone, so it rides the animation. It plays well with [SelfDestroy](/EngineAPI/Components/SelfDestroy) on the same prefab.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| material | material | | The decal material. Empty generates a soft dark disc fallback. |
| size | number | `0.1` | The mark size in world units. |
| life | number | `2` | Seconds before the mark fades out. `0` keeps it until the scene resets. |
| fadeTime | number | `1` | The fade out duration. `0` removes it instantly. |
| randomRotate | checkbox | `true` | Randomly rolls each mark around the surface normal so they don't look stamped. |
