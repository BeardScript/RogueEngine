### Model

The **Model** class represents a 3D model asset. An instance of it is a reference to a model file, with the means to load it and instantiate fresh copies whenever you need.

The class mirrors the [Prefab](/EngineAPI/Prefab) API and includes static members to load models by name at runtime, which is handy when you don't want to reference the model in a component.

For how models work as assets, the stub system, named models and `props.model`, see the [Models](/Assets/Models) article.

### props.model

Components can hold a reference to a model file directly, the same way [props.prefab](/EngineAPI/Component#decorators) works for prefab files.

```typescript
import * as RE from 'rogue-engine';

@RE.props.model()      body: THREE.Object3D;  // A fresh, skeleton aware instance, ready to add in start()
@RE.props.model(true)  spawner: RE.Model;     // A Model handle you can instantiate from as many times as you want
```

Without the `true`, the prop gives you the model itself as a fresh [Object3D](https://threejs.org/docs/#api/en/core/Object3D) that's safe to attach to the scene, for example in [start](/EngineAPI/Component#start). With it, you get a **Model** handle and you're in charge of instantiating copies from it. Either way, you pick the model by dragging the file onto the field, or from the select dialog, same as any other asset prop.

## Static

#### static namedModelUUIDs

```typescript
static namedModelUUIDs: Record<string, string>;
```

A map of all model `uuids` with their paths relative to `Assets/Models/` as keys. We refer to this relative path as the "name path". Unlike named prefabs, model name paths keep their file extension, like `"Enemies/SuperTank.glb"`. This way you can have the same base name in several formats in the same folder.

#### static fetch

```typescript
static fetch(name: string): Promise<Model | undefined>;
```

Asynchronously loads a model within `Assets/Models/` by its "name path" and returns a ready **Model** handle. A model has to be loaded before you can instantiate it, so use this when you're not sure it's already in memory.

#### static instantiate

```typescript
static instantiate(name: string, parent?: THREE.Object3D): Promise<THREE.Object3D | undefined>;
```

Loads a model by name and instantiates a fresh copy of it in one go. Optionally, you can pass in an [Object3D](https://threejs.org/docs/#api/en/core/Object3D) as the parent of the new copy.

```typescript
import * as RE from 'rogue-engine';
...
async start() {
  // Location: Assets/Models/Enemies/SuperTank.glb
  const tank = await RE.Model.instantiate("Enemies/SuperTank.glb", this.object3d);
}
```

#### static get

```typescript
static get(name: string): Model;
```

Synchronously returns a **Model** handle by name, without loading it. This is useful when the model is set to "preload" in the AssetManager and you know for a fact it's already in memory.

## Properties

#### .uuid

```typescript
readonly uuid: string;
```

The unique identifier of this model.

#### .path

```typescript
readonly path: string;
```

The current path to the model file.

#### .name

```typescript
readonly name: string;
```

The name of the model file, without its extension.

#### .source

```typescript
readonly source: THREE.Object3D | undefined;
```

The shared model asset source. Don't add this one to the scene, it's the asset every instance is cloned from. Use [.instantiate](#instantiate) instead.

## Methods

#### .instantiate

```typescript
instantiate(parent?: THREE.Object3D): THREE.Object3D | undefined;
```

Instantiates a fresh, skeleton aware copy of the model and attaches it to the given parent, or to the current scene if no parent is passed in. You can instantiate as many copies as you want from the same **Model** handle.

```typescript
import * as RE from 'rogue-engine';
...
@RE.props.model(true) spawner: RE.Model;

start() {
  const enemy = this.spawner.instantiate();
}
```
