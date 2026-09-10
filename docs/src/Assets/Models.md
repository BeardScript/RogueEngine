### Models

A Model is a 3D object, a character, a prop, a vehicle, that lives in a model file like gltf, fbx or glb. Since 1.1.0, models are first class assets in Rogue Engine. They're managed by the [AssetManager](/Workflow/AssetManager) the same way Prefabs, Scenes and Materials are, and you can drop them in scenes and prefabs where they'll be dynamically rehydraged. You can also load them by name at runtime, as well as through the `@RE.props.model()` decorator in your components.

### Supported Formats

The engine supports **gltf**, **fbx** and **glb** files, plus **drc** compressed geometry. Whenever possible use **gltf** or its binary sibling **glb**, since it's the best supported format for WebGL.

A gltf file usually comes with companion files: a **.bin** with the mesh data and textures. Keep them together with the model and its **.meta** file, the engine needs them to rebuild the model.

### The .meta File

When you add a model to your project, the engine creates a **.meta** file right next to it. It holds the model's uuid and its settings. Don't delete it, and keep it and any companion files around when you move or share models. That's how the engine finds a model to rebuild its stubs.

### Using a Model in a Scene

To add a model to your scene, drag the file and drop it on the **Scene** or **Hierarchy** window, or drop it on a particular object in the **Hierarchy** if you want to nest it.

When you drop a model in a scene or a prefab, the engine doesn't serialize the whole model into the file. Instead it stores a light reference called a **model stub**, with a stable id that points at the source file. When the scene or prefab loads, the engine rehydrates the stub: it loads the model file and rebuilds it in its place.

This is great for a few reasons:

- Scenes and prefabs stay small, no matter how heavy the model is.
- The same model can live in many scenes and prefabs without being copied around.
- Components you add to a model's parts survive reloads. That includes the ones you put on generated [hit mesh](/EngineAPI/HitMesh) pieces, since those get rebuilt the same way.

The trade off is that the engine needs the original model files to rebuild stubs. If you delete or move them, the models in your scenes won't load.

### Referencing a Model

If you want an object to always show a specific model, or spawn copies of it, hold a reference to it in a component with the `props.model` decorator. Then drag the model file onto the field, or pick it from the select dialog.

```typescript
import * as RE from 'rogue-engine';

@RE.props.model()      body: THREE.Object3D;  // A fresh instance, ready to add to the scene
@RE.props.model(true)  spawner: RE.Model;     // A handle to instantiate copies from
```

Without the `true`, the prop holds the model itself as a fresh instance you can add in `start()`. With it, you get a [Model](/EngineAPI/Model) handle to instantiate as many copies as you want.

### Named Models

Models under an `Assets/Models/` folder are **Named Models**. Just like [named prefabs](/Assets/Prefabs), they can be loaded at runtime by name, without referencing them in a component first.

The names are the paths relative to the `Assets/Models/` folder, keeping the file extension. So the file `Assets/Models/Enemies/SuperTank.glb` is loaded as `"Enemies/SuperTank.glb"`. Keeping the extension lets you have the same base name in several formats in the same folder.

You can load and instantiate them with the [Model](/EngineAPI/Model) class:

```typescript
import * as RE from 'rogue-engine';
...
async start() {
  // Loads and instantiates Assets/Models/Enemies/SuperTank.glb.
  const tank = await RE.Model.instantiate("Enemies/SuperTank.glb", this.object3d);
}
```

Models in that folder get their meta created automatically when you add them, so the name registry is always ready, in the editor, in the browser player and in web builds.

### Previewing a Model

Select a model file in the **Project** window and you'll see a preview of it in the Asset Inspector, even if it doesn't have a meta yet.

### Learn More

- The [Model](/EngineAPI/Model) class to load and instantiate models from code.
- Right clicking a model file gives you **Get Animations** and **Generate Hit Mesh**. See [Animations](/Assets/Animations) and the [Combat](/Workflow/Combat) guide for those.
