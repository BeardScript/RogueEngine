### Batching

Meshes batch automatically, on Play and in the editor viewport. Anything sharing a geometry and a material draws in one call, and the originals are hidden rather than removed, so raycasts, colliders and your own code still find them.

Batching isn't only for things that stay put. A mesh that moves is synced into its instance each frame, so a volley of bullets or a wall of decals batches like anything else. Meshes that appear later are picked up too.

Skinned meshes, morph targets and anything already instanced are left out. Transparent meshes batch by default and blend in instance order. Flat [decals](/EngineAPI/Components/Decal) are absorbed into batches and give their slot back when they expire.

The catch is that a batched mesh reads as hidden to the renderer. That's why `isDrawn` and `userVisible` exist: use them instead of `.visible` when you care about what the game asked for.

### Methods

- `setStatic(object, value)`: marks a subtree as final geometry, so its transforms are baked once and never checked again. This is the promise behind the `isStatic` checkbox in the object inspector.
- `isStatic(object)`: whether a subtree is marked static.
- `isDrawn(object)`: whether an object reaches the screen, by itself or as one instance of a batch. Use this in raycast filters, since a batched source reads as hidden.
- `userVisible(object)`: what the game last asked for, where `.visible` answers for the renderer instead.
- `isBatched(object)`: whether an object is batched.
- `state(object)`: what the batcher holds right now: batches, the meshes it hid, and meshes hidden elsewhere. For when part of a scene isn't where it should be.
- `repair(object)`: restores meshes the batcher hid and then lost track of. Returns whether it found any.
- `sourceOf(instance)`: the source mesh behind a batch instance, for picking.
- `sourceOfHit(intersection)`: the source mesh behind a raycast intersection, when the hit object is a batch. Use it on anything acting on a hit, since the hit reports the batch, not the mesh.
- `includeTransparent(value)`: whether transparent meshes batch. A batch sorts as one unit, so instances blend in instance order. Turn this off if that sorting looks wrong.
- `includeMultiDraw(value)`: whether meshes that share a material but not a geometry get merged into one draw. It's one call, but each geometry is copied into the batch buffer.

### Engine methods

These run the batcher and you normally don't call them yourself: `apply()`, `schedule()`, `rebuild()`, `clear()`, `sync()`, `update(object, camera)` and `prepareForSerialization(json)`.

Your own visibility still works. The eye icon and `.visible` keep doing what they always did, and a batched mesh reads as hidden to the renderer while `userVisible` tells you what the game actually wanted.
