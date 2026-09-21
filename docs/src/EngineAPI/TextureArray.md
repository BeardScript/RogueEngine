### TextureArray

A texture array is a list of same sized layers kept in one texture, sampled by layer index. Every layer is its own image, but they all draw in one call, so a shelf of differently textured props can share a single material.

They live in **.textureArray** files and are managed by the AssetManager. See the [Texture Arrays](/Assets/TextureArrays) article for how to build and use them in the editor.

The **TextureArray** object is the API for working with them from code. Most of the time you won't need it, since a material references an array and each object picks its layer through [TileSelection](/EngineAPI/TileSelection).

### Types

#### TextureArrayManifest

```typescript
type TextureArrayManifest = {
  uuid: string;
  type: "TextureArray";
  name?: string;
  /** One entry per layer, in layer order. */
  layers: TextureArrayLayer[];
  settings: TextureArraySettings;
};
```

The serialized **.textureArray** file. Layer order is the layer index.

#### TextureArraySettings

```typescript
type TextureArraySettings = {
  colorSpace: "srgb" | "linear" | "none";
  wrapS: "layers" | "repeat" | "clamp" | "mirror";
  wrapT: "layers" | "repeat" | "clamp" | "mirror";
  magFilter: "linear" | "nearest";
  minFilter: "nearest" | "nearestMipmapNearest" | "nearestMipmapLinear"
    | "linear" | "linearMipmapNearest" | "linearMipmapLinear";
  premultiplyAlpha: boolean;
  /** Target layer size in pixels. 0 = first layer size. */
  size: number;
};
```

The sampling settings, applied to the array as a whole. `layers` on a wrap keeps the wrap of the textures the array was built from.

#### TextureArrayLayer

```typescript
type TextureArrayLayer = string | TextureArraySlice;
```

One layer entry: a texture uuid, a colour for a swatch, or a sheet to cut up.

#### TextureArraySlice

```typescript
type TextureArraySlice = {
  /** Uuid of the sheet texture. */
  texture: string;
  /** Cells across. */
  columns: number;
  /** Cells down. */
  rows: number;
  /** Cells to take, in reading order. 0 or missing means all of them. */
  frames?: number;
};
```

A sheet cut into one layer per cell, in reading order. Every cell becomes a layer, so a frame is a layer index.

#### TextureArrayCell

```typescript
type TextureArrayCell = {
  column: number;
  row: number;
  columns: number;
  rows: number;
  /** Its index in reading order, relative to the sheet's start. */
  frame: number;
};
```

Where a layer sits in the sheet it was cut from.

### Methods

- `build(manifest, deps)`: builds the array texture, loading whatever the layers reference. Async.
- `resolveSettings(settings)`: fills a settings object with defaults.
- `createManifest(uuid, name?)`: creates an empty manifest.
- `getManifest(texture)`: the manifest stored on a texture.
- `getLayers(texture)`: the layer uuids of a texture.
- `layerCountOf(layer)`: how many layers one entry holds. A sheet holds its cells.
- `isSwatch(layer)`: whether a layer entry is a colour to generate.
- `normalizeSwatch(color)`: a colour as a layer key, or `undefined`.
- `isSliceLayer(layer)`: whether a layer entry is a sheet to cut up.
- `resolveSlice(layer)`: a slice with a grid the build can trust.
- `sheetGrid(sheet, options?)`: works out a grid from a sheet and its options.
- `detectSheetGrid(pixels, maxColumns?, maxRows?)`: reads the sheet's pixels and works the grid out from the art. This is what the **Detect** button uses.
- `cellAt(texture, layerIndex)`: where a layer sits in its sheet.
- `usesTexture(array, uuid)`: whether an array uses a texture.
- `addSwatches(manifest, colors)`: appends any colour the array does not have yet, and answers the layer of each one.
