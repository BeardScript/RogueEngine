### App

The **App** class is a static class in charge of fetching and loading scenes when playing them from the editor or built project. Additionally, it gives us access to the current Scene, the active Camera and the project configuration.

All of its members are **static**, so you access them through the class itself, like `App.currentScene` or `App.loadScene("MyScene")`.

### Properties

#### .activeCamera

```typescript
activeCamera: string;
```

This is the active camera rendering the current Scene.

#### .title

```typescript
title: string;
```

This is the title of our App.

#### .currentScene

```typescript
currentScene: Scene;
```

This is the currently active scene being rendered by the **runtime** controller.

#### .scenes

```typescript
readonly scenes: { name: string, uuid: string}[];
```

This object contains a reference to the scenes that we wish to build with our app. The first one in the array will be run first.

#### .settings

```typescript
readonly settings: any;
```

The project settings object. It gets populated from the project configuration when the app is initialized.

#### .sceneController

```typescript
sceneController: SceneController;
```

The active [SceneController](/EngineAPI/SceneController). It defaults to the [Runtime](/EngineAPI/Runtime) controller and is swapped out by the engine as needed.

#### .lanIP

```typescript
readonly lanIP: string;
```

The LAN IP used to serve static assets during development. It defaults to `"localhost"` and is used by [getStaticPath](/EngineAPI/Functions#getstaticpath) to build asset urls while you're developing.

### Methods

#### .play

```typescript
play(config: {
  title: string,
  scenes: {name: string, uuid: string}[],
  assetPaths: { [uuid: string]: string },
  namedPrefabUUIDs: {[name: string]: string},
  namedModelUUIDs: {[name: string]: string},
  tags?: string[],
  inputConfig?: any,
}): void
```

This function must be called to start the App only in the built project. It takes the serialized project configuration (the same data that's stored in the generated `rogue-config.json`), registers the project tags and input action map, and then loads and plays the first scene in the list.

#### .loadScene

```typescript
loadScene(name: string | number, loading?: boolean): Promise<void>
```

Call this function to asynchronously load a scene. Scenes, like all Assets in Rogue Engine, are not loaded in memory until after they are fetched in order to save on resources. The loaded scene will be immediately played by the [Runtime](/EngineAPI/Runtime) controller.

Pass `true` as the second parameter to put up the [loading screen](/EngineAPI/LoadingScreen) while the scene loads. Leave it out for a quick swap, or when you're covering the load yourself.


#### .clone

```typescript
clone(object3d: Object3D, parent?: Object3D): Object3D
```

This method clones a given [Object3D](https://threejs.org/docs/#api/en/core/Object3D) with all its components. It's basically Rogue Engine's version of **Object3D.clone** which only clones the object.