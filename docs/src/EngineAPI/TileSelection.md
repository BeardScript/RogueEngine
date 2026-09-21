### TileSelection

Tile selection is how an object picks which layer of a texture array it draws. The material stays shared, and each object names its layer per slot, so a whole set of props can share one material and still look different.

```typescript
RE.TileSelection.setTiles(mesh, { map: 3 });
RE.TileSelection.getTiles(mesh);
```

A layer can be given as an index, or as the uuid of a layer texture so it survives reordering.

### Types

#### TileRef

```typescript
type TileRef = number | string;
```

A layer index, or a layer texture's uuid.

#### TileRefs

```typescript
type TileRefs = { [slot: string]: TileRef };
```

Which layer an object renders per material slot, like `{ map: 2, normalMap: 1 }`.

#### Flip

```typescript
type Flip = { x: boolean; y: boolean };
```

Mirror per axis. A flip lands on the object's own geometry, so nothing else wearing it flips.

### Methods

- `setTiles(object, tiles)`: declares which layer an object renders per slot.
- `getTiles(object)`: the layers an object is set to render.
- `setTile(object, slot, ref)`: sets one slot, or clears it when the ref is empty.
- `setFlip(object, flip)`: mirrors the frames an object samples, one axis at a time.
- `refresh(root)`: installs an object's own tiles onto the geometry it has now, for a whole subtree.
- `layersOf(object)`: the layer each array driven slot samples, clamped to the array.
- `layerCount(array)`: how many layers an array holds.
- `retile(root, array, from, to)`: moves objects naming one of the array's layers onto a new key, and returns how many it moved. Useful when you edit a layer, since a stale key resolves to layer 0 and would silently repaint.
- `baseGeometry(object)`: the geometry a mesh samples from, the original and not the per tile clone. Batching groups by this.
- `apply(material, slot, arrayTexture)`: patches a material so a slot is sampled from an array. This is what the inspector does for you.
- `remove(material, slot?)`: detaches one slot's array, or every slot when no slot is given.
- `referencedArrays(material)`: the slot to array uuid map stored on a material.
- `isSupportedSlot(slot)`: whether a material slot can be driven by an array.
- `audit(root?)` / `tick(root?)`: repairs what a late patched material missed.
- `tileAttribute(slot)`: the vertex attribute a slot's tile is read from. A batch supplies it per instance.

**A note on slots:** `displacementMap` is left out, since it's sampled in the vertex stage, not the fragment stage.
