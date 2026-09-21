### Palette

Shapes that only differ by colour don't need a material each. A palette collapses every plain colour material in a selection into one array, one layer per colour, and points each mesh at its layer.

This is the code behind the editor's **Collapse to Palette** action. You reach for it when you're building a similar tool, or doing the same thing at runtime.

### Types

#### PaletteTarget

```typescript
type PaletteTarget = {
  object: THREE.Mesh;
  material: any;
  /** The layer key: the colour itself, so a later collapse never renumbers it. */
  swatch: string;
  /** Everything a swatch cannot carry. Only like shapes collapse together. */
  shape: string;
};
```

A mesh a palette swatch can stand in for. `shape` groups materials that can share a palette, since a swatch can only carry colour, not the rest of how a material is drawn.

### Methods

- `targets(objects)`: the meshes in a selection that can collapse to a palette.
- `shape(material)`: the key that groups materials a swatch can stand in for, or `undefined` for one it can't, like a material with a texture.
- `swatch(material)`: the colour of a material as a layer key, or `undefined`.

A palette is just a [TextureArray](/EngineAPI/TextureArray) with one swatch layer per colour. Once collapsed, each mesh picks its layer with [TileSelection](/EngineAPI/TileSelection), the same as any other array.
