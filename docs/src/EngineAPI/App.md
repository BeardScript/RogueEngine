### App

The **App** class is a singleton in charge of fetching and loading scenes when playing them from the editor or built project. Additionally, it gives us access to the current Scene and the active Camera.

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

### Methods

#### .play

```typescript
play(): void
```

This function must be called to start the App only in the built project.

#### .loadScene

```typescript
loadScene(name: string | number): Promise<void>
```

Call this function to asynchronously load a scene. Scenes, like all Assets in Rogue Engine, are not loaded in memory until after they are fetched in order to save on resources. The loaded scene will be immediately played by the [Runtime](/EngineAPI/Runtime) controller.


#### .clone

```typescript
clone(object3d: Object3D, parent?: Object3D): Object3D
```

This method clones a given [Object3D](https://threejs.org/docs/#api/en/core/Object3D) with all its components. It's basically Rogue Engine's version of **Object3D.clone** which only clones the object.