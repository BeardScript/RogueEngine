### SceneController

The **SceneController** is an abstract class so it should never be directly instantiated. This class defines the life cycle of a Scene and its components. The [Runtime](EngineAPI/runtime) and **editorRuntime** both extend this class to implement functionality related to the scene when it's being played, and the scene when it's being edited respectively.

### Properties

#### .scene

```typescript
readonly scene: THREE.Scene
```

The [Scene](https://threejs.org/docs/#api/en/scenes/Scene) instance that is currently running.

#### .camera

```typescript
camera: THREE.Camera
```

The [Camera](https://threejs.org/docs/#api/en/cameras/Camera) instance that's currently "showing" us the scene.

#### .deltaTime

```typescript
readonly deltaTime: number
```

This value represents the seconds elapsed between the last frame and the current one.

#### .clock

```typescript
readonly clock: THREE.Clock
```

The three.js [Clock](https://threejs.org/docs/#api/en/core/Clock) being used to keep track of time.

### .height

```typescript
readonly height: number
```

This value represents the height of the Scene Renderer.

### .width

```typescript
readonly width: number
```

This value represents the width of the Scene Renderer.

### .rogueDOMContainer

```typescript
readonly rogueDOMContainer: HTMLElement
```

This property keeps a reference to the current **HTMLElement** where the scene is being rendered

### .containerId

```typescript
readonly containerId: string
```

This field contains the id of the **HTMLElement** where the Scene is being rendered.

#### .renderer

```typescript
readonly renderer: THREE.WebGLRenderer
```

The active [WebGLrenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer).

#### .isRunning

```typescript
readonly isRunning: boolean
```

This flag tells us if the **SceneController** is running the animation loop or not.

### .isPaused

```typescript
readonly isPaused: boolean
```

This flag tells us if the **SceneController** is paused. Pausing will only stop **beforeUpdate()** **update()** and **afterUpdate()** from running along with their respective event listeners, but not the loop itself, so keep that in mind.

### .defaultRenderFunc

```typescript
readonly defaultRenderFunc: () => void
```

This keeps a reference to the default render function that is called on every frame.

### .renderFunc

```typescript
renderFunc: () => void
```

This is the render function being called every frame. By default it calls **defaultRenderFunc**. By setting this property you can modify the behavior of the renderer to apply post-production effects among other things.

### Methods

#### .pause
``` typescript
pause(): void
```

This method will pause the animation loop if it's running.

#### .resume
``` typescript
resume(): void
```

This method will resume the animation loop if it's paused.

#### .togglePause
``` typescript
togglePause(): void
```

This handy method will toggle between [pause()](#pause) and [resume()](#resume).

### Events

#### .onPlay

```typescript
onPlay(callback: () => any): {stop: () => void}
```

This event listener helps us hook into the initialization sequence of this **SceneController** instance. It returns an object with a **stop()** function you should call in order to stop the listener.

#### .onStop

```typescript
onStop(callback: () => any): {stop: () => void}
```

This event listener helps us hook into the stopping sequence of this **SceneController** instance. It returns an object with a **stop()** function you should call in order to stop the listener.
