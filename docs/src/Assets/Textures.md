### Textures

Textures are the images that give surfaces their detail. A [Material](/Assets/Materials) uses them for its color, normal, roughness and other maps, the [Skybox](/EngineAPI/Skybox) uses them for its faces, and they show up all over components as image fields.

In Rogue Engine, image files are handled as texture assets by the [AssetManager](/Workflow/AssetManager), so they load on demand and can be shared by anything that uses them.

### Supported Formats

The engine supports **png**, **jpg** and **webp**, plus **gif**, **tga**, **tif** and **ktx2**. KTX2, TGA and TIF work like any other texture now: they load in the engine, show a thumbnail in the File Manager and a preview in the Texture Inspector, and drop into any texture field. Draco compressed models and KTX2 textures work in a build too, and the decoders ship with it.

Which one to reach for depends on what you're optimizing. **jpg** and **webp** keep the file small, which helps with download and disk, but they get expanded to raw pixels in GPU memory. **ktx2** is transcoded to whatever compressed format your GPU understands and stays compressed in memory, so it's the one to use for large textures and anything performance sensitive.

So for a game the safe default is **ktx2 for your 3D textures**, and **webp or png for everything else**. One ktx2 file transcodes to whatever the device supports, so the same asset works on desktop and mobile instead of needing a variant per platform, and it's the only one of these that doesn't sit in VRAM at full raw size. Keep webp, jpg or png for small images, UI, and anything you generate or edit at runtime, where the VRAM savings don't add up to much and the extra authoring step isn't worth it.

### Using a Texture

To use an image as a texture, just put the image file in your project and drag it onto any texture field in the inspector. Texture fields are everywhere: the map slots of a Material, the faces of the Skybox, image fields in components (through `props.texture`) and even UI backgrounds and custom cursors.

When you drag an image onto a material map, that material references the image file. If a material ends up holding a texture that isn't a file yet, like one you generated or painted in the inspector, the engine writes it out as an image file when you save the material, right next to it, with its own **.meta**. That way it becomes a proper texture asset of its own instead of living only inside the material file.

### Sharing Textures

Textures load and are shared like any other asset. Several materials can reference the same image file and they all end up using the same texture, so a texture is only fetched once no matter how many places use it.

### Loading and Performance

Textures load through the AssetManager, so they only take memory when something actually uses them. For the ones you need right away, set them to preload in the [Asset Manager](/Workflow/AssetManager) window, or keep them loaded between scenes to avoid hitches when you come back to them.

Keep an eye on resolution. Big textures eat VRAM and take time to load, so use the smallest size that still looks right. For large images reach for **ktx2**, since it stays compressed in GPU memory instead of expanding to raw pixels like webp and jpg do.

### Learn More

- [Materials](/Assets/Materials) to see how textures fit into a material's maps.
- [Skybox](/EngineAPI/Skybox) to build a cubemap sky from textures.
- [Texture Arrays](/Assets/TextureArrays) to pack many images into one texture and one draw call.
