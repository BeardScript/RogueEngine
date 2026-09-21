### Texture Arrays

A texture array is a list of same sized layers kept in one texture, sampled by layer index. Every layer is its own image, but they all draw in a single call, so a shelf of differently textured props can share one material.

They're stored in **.textureArray** files and managed by the [AssetManager](/Workflow/AssetManager), so they load on demand and can be shared like any other asset.

### Creating a Texture Array

To create one, right click the target folder and select **Assets -> Texture Array**. You'll be asked for a name, then the array opens in the Asset Inspector.

### Layers

The Asset Inspector lists the array's layers. You can add, remove and reorder them, and the settings (color space, wrap, filter, mipmaps) apply to the array as a whole.

Layers are resized to the biggest one, and a layer that can't be read becomes a placeholder. That way an index never shifts under you just because one image failed to load.

### Assigning a Texture Array

Assign the array to a material's **Map** field, or to any texture field of a component. The material stays shared: only the layer changes per object.

Each object picks its layer through [TileSelection](/EngineAPI/TileSelection):

```typescript
RE.TileSelection.setTiles(mesh, { map: 3 });
RE.TileSelection.getTiles(mesh);
```

### Tile Sheets

Instead of cutting a sprite sheet by hand, add it as a sheet. Give the array the sheet, the columns and the rows, and every cell becomes a layer, in reading order.

The **Detect** button reads the sheet's own pixels and works the grid out from the art. The rows in the inspector show the cut, not the whole sheet, so you can see what a cell really is, and the preview in a material's tile picker shows every cell too.

This is what the [Animator2D](/EngineAPI/Components/Animator2D) component animates. A clip is just a run of layers, so a frame costs nothing extra.

### Swatches

Shapes that only differ by colour don't need a material each. Select them, open the material list and hit **Collapse to Palette**. Every plain colour material in the selection becomes a layer of one palette array, and the meshes are pointed at their layer. Run it again later and the swatches already in the palette keep their layer.

Under the hood a palette is just a texture array with one swatch layer per colour. See the [Palette](/EngineAPI/Palette) API if you're building something similar yourself.

### Learn More

- The [TextureArray](/EngineAPI/TextureArray) class to build and read arrays from code.
- [TileSelection](/EngineAPI/TileSelection) to pick the layer an object draws.
- The [Animator2D](/EngineAPI/Components/Animator2D) component to animate frames from an array.
- [Textures](/Assets/Textures) for the image files that go into the layers.
