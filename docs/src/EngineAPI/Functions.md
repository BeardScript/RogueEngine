### Functions

### registerComponent

```typescript
registerComponent<T extends Component>(ComponentClass: new (...args: any[]) => T): void
```

This function, as its name implies, gives us the ability to register a component. It takes the component class primitive as a parameter and stores it in the Engine's internal Component primitives map. This makes it available to be added to any [Object3D](https://threejs.org/docs/#api/en/core/Object3D) in our scene either by dragging and dropping it in the editor or through code, using the [addComponent](#addcomponent) function.

```javascript
import * as RE from 'rogue-engine';

export class MyComponent extends RE.Component {
...
}

RE.registerComponent(MyComponent);

```

### addComponent

```typescript
addComponent(component: Component)
```
This function adds the given instance of a component to the Engine's internal components map. This makes it available to the active [SceneController](/EngineAPI/scenecontroller) which will proceed to "awaken" it and run its loop methods every frame. In a way, this function brings the component to life, so if you wish to do something with the component before it gets into the animation loop you should do it before calling it.

**Note:** this function triggers the [onComponentAdded](#oncomponentadded) event.

### removeComponent

```typescript
removeComponent(component: Component)
```

This function removes the given instance of a component from the Engine's internal components map. This makes it unavailable to the active [SceneController](/EngineAPI/scenecontroller) stopping its animation loop functions. Since the relation to the [Object3D](https://threejs.org/docs/#api/en/core/Object3D) is set within the component, calling this function will also make the component unavailable to that object. Make sure you lose any reference to it so that it can be garbage collected as soon as possible.

**Note:** this function triggers the [onComponentRemoved](#oncomponentremoved) event.

### removeComponents

```typescript
removeComponents(object3d: Object3D, recursive?: boolean)
```

This handy and flexible function lets us remove all components related to the given [Object3D](https://threejs.org/docs/#api/en/core/Object3D) and you can optionally pass in a **recursive** flag to remove all components from all its children recursively.

**Note:** this method will fire the [onRemoveComponent](#onremovecomponent) event for every removed component.

### getComponent

```typescript
getComponent<T extends Component>( ComponentClass: new (... args: any[]) => T, object3d: THREE.Object3D ): T | undefined
```
This function retrieves a [Component](/EngineAPI/component) related to an [Object3D](https://threejs.org/docs/#api/en/core/Object3D). This is handy if you don't want to remember component names or keep maps with them. Just call this function passing in the component type and the **Object3D**. If it can't find anything it'll return undefined.

**Example:**

```javascript
import { Object3D } from 'three';
import { getComponent } from 'rogue-engine';
import { MyComponent } from './MyComponent'

function getMyComponent(object3d: Object3D) {
  return getComponent(MyComponent, object3d);
}
```

### getComponents

```typescript
getComponents<T extends Component>( ComponentClass: new (... args: any[]) => T ): T[]
```
This function retrieves all the [Component](/EngineAPI/component)s of the given type.

### getObjectComponents

```typescript
getObjectComponents(object3d: Object3D): Component[]
```
This function retrieves all the [Component](/EngineAPI/component)s related to the given [Object3D](https://threejs.org/docs/#api/en/core/Object3D).

### getComponentByName

```typescript
getComponentByName(name: string, object3d?: Object3D): Object3D | undefined
```

This handy function returns the first component with the given name, found in the Engine's internal components map. If you pass in the optional [Object3D](https://threejs.org/docs/#api/en/core/Object3D) parameter, it will return the first component with the given name within that object. This is the preferred way since not only it does not require you to keep unique names for all your components throughout the scene, but it is also more performant. So, if you know the **Object3D**, pass it in.

### traverseComponents

```typescript
traverseComponents(fn: (component: Component, objectUUID: string, index: number) => void)
```
Runs the given function for every [Component](/EngineAPI/component) present in the current scene.

### getStaticPath

```typescript
getComponentByName(path: string): string
```
This function attaches the static folder address to the given path, which should be passed **without the initial slash (/)**. You should always use this method for your static assets given that it'll handle both the address in development and in a built project.

For more information see the [Static Assets](/workflow/StaticAssets) article.

**Example:**

```javascript
import { getStaticPath } from 'rogue-engine';
...
// Retrieves the addres of the icon at: Assets/Static/icons/myIcon.svg
imgElement.src = getStaticPath("icons/myIcon.svg");

```

### setEnabled

```typescript
setEnabled(object: THREE.Object3D, enabled: boolean): void
```
You can use this function to enable or disable the `runtime` features of an object which, essentially means that all of its components (and it's descendant's) will be rendered inactive.

Enabling or Disabling an object will trigger the respective lifecycle events of an object's component and its descendants.

**Example:**

```javascript
import * as RE from 'rogue-engine';
import * as THREE from 'three';
...

@RE.props.object3d() target: THREE.Object3D;

start() {
  imgElement.src = RE.setEnabled(this.target, true);
}

```

### isEnabled

```typescript
isEnabled(object: THREE.Object3D): boolean
```
Returns the enabled status of an object.

**Example:**

```javascript
import * as RE from 'rogue-engine';
import * as THREE from 'three';
...

toggleEnabled(object: THREE.Object3D) {
  const enabled = RE.isEnabled(object);
  RE.setEnabled(this.target, !enabled);
}

```

### isActive

```typescript
isActive(object: THREE.Object3D): boolean
```
Returns the active status of an object. An object is inactive when either itself or one of it's ancestors is disabled.

**Example:**

```javascript
import * as RE from 'rogue-engine';
import * as THREE from 'three';
...

doSomething(object: THREE.Object3D) {
  if (RE.isActive(object)) {
    // do something if object is active
  }
}

```