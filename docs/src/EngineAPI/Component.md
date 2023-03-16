### Component

A component adds functionality to an [Object3D](https://threejs.org/docs/#api/en/core/Object3D). An object can have multiple components but an instance of a component can be directly related to only one **Object3D**.

The **Component** class defines the behavior of a component. We need to extend from this class to create our own components. We should never call the Component's methods ourselves. These are to be called exclusively within the Engine.

When creating a component through the editor's interface (Assets -> Component) a component will be created with the standard template, so you shouldn't have to create a component by hand but, in any case, let's see how hey are built.

In the following example, we have a component **MyComponent** which extends the class **Component**. After defining it, we register it. If we don't register it, the component won't be accessible from anywhere. This is the way to let the Engine acknowledge it.

```typescript

import * as RE from 'rogue-engine';

export class MyComponent extends RE.Component {
...
}

RE.registerComponent(MyComponent);

```

### Constructor

```typescript

constructor(name: string, object3d: THREE.Object3D)

```

The **Component** class constructor takes a **name** string and an **Object3D** as parameters. The **Object3D** will be assigned to the **Component.object3d** property. Normally, after instantiating a component you would need to add it with the engine's **addComponent()** function, otherwise, the component will be there on standby doing nothing.

In the following example, we import our component **MyComponent** and use the [getObjectByName](https://threejs.org/docs/#api/en/core/Object3D.getObjectByName) method in the **App.currentScene** object which is the current Three.js [Scene](https://threejs.org/docs/#api/en/scenes/Scene). Then we instantiate the component and add it to the engine's component map with [addComponent](/EngineAPI/Functions#addComponent). That's the cue for the engine to start executing its behavior methods in the next cycle.

```typescript

import { addComponent, App } from 'rogue-engine';
import { MyComponent } from './MyComponent'
...
const object3d = App.currentScene.getObjectByName(MyObject);
const component = new MyComponent(MyComponentName, object3d);

addComponent(component);
...

```

### Decorators

We can use decorators to provide a graphic interface for our component properties within the editor. In order to do this we need to fetch the decorators from `RE.props`.

#### RE.props

```typescript
props: Props
```

This object contains all the available decorators.

Each of these decorators will show a certain graphic interface for specific types of properties.

Here's a detailed list of all the possible decorators.

```typescript
import * as RE from 'rogue-engine';

class MyComponent extends RE.Component {
  @RE.props.num() num = 0;
  @RE.props.num(0, 1) slider = 0.5;
  @RE.props.checkbox() toggleSomething = true;
  @RE.props.text() textInput = "";
  @RE.props.text(true) textArea = ``;
  @RE.props.code("html") inlineCodeEditor = ``; // options: "json" | "html" | "glsl"
  @RE.props.select() dropdown = 0;
  dropdownOptions = ["option1", "option2"];
  @RE.props.text() textInput = "";
  @RE.props.vector2() vector = new THREE.Vector2();
  @RE.props.vector3() vector = new THREE.Vector3();
  @RE.props.object3d() hierarchyObj: THREE.Object3D;
  @RE.props.prefab() prefab: RE.Prefab;
  @RE.props.material() mat: THREE.Material;
  @RE.props.texture() texture: TREE.Texture;
  @RE.props.audio() sound: THREE.Audio;
  @RE.props.audio(true) positionalSound: TREE.PositionalAudio;
  @RE.props.animation() clip: TREE.AnimationClip;
  @RE.props.texture() texture: TREE.Texture;
  @RE.props.button() doSomething = () => {/*Do Stuff*/};
doSomethingLabel = "Do Something";
  @RE.props.data() serializeThis = {prop: "Hello World"};
}
```

#### Prop (Dropped)

```typescript
@Prop(type: string)
```
**This is no longer supported, use [RE.props](#decorators) instead**

The **@Prop** decorator helps us define our component's [interface](#component-interface) in a much cleaner way. The decorated properties will show in the editor, in our component's inspector.

```typescript
import * as RE from 'rogue-engine';

class MyComponent extends RE.Component {
  myNumber; // Won't show in the editor
  @RE.Prop("Vector3") myVector; // Will show in the editor
}
```

Allowed types are the same as for the [interface static property](#component-interface).

### Properties

#### .name

```typescript
name: string
```

The name of the component. This can be used as an identifier to retrieve it with the [getComponentByName](Functions#getcomponentbyname) function.

#### Component.interface

```typescript

static interface: ComponentInterface

```

The static interface object defines the graphic interface of our component.

This is handled in the background by the [property decorators](#decorators) so for most cases, it's encouraged to leave this alone and use that instead.

This property has a ComponentInterface type which, maps a property name with a specific string describing the type of the property:

```typescript
type ComponentInterface = {
  [propName: string]:
    | "String"
    | "Number"
    | "Boolean"
    | "Vector3"
    | "Vector2"
    | "Select"
    | "Object3D"
    | "Prefab"
    | "Texture"
    | "Material"
    | "Color"
    | "Audio"
    | "PositionalAudio";
}
```

Each of these options will display a different type of property controller interface in the Component inspector.

Keep in mind that **propName** must be a valid public property within the component.


Example

```typescript

import * as RE from 'rogue-engine';

export class MyComponent extends RE.Component {
  speed: number;

  interface: RE.ComponentInterface = {
    speed: 'Number'
  }
...

```

#### .object3d

```typescript
readonly object3d: THREE.Object3D
```

This is the [Object3D](https://threejs.org/docs/#api/en/core/Object3D) to which this component belongs.

#### .isReady

```typescript
readonly isReady: boolean
```

This property returns the ready state of the component. A component is considered ready when all of the assets declared in its interface property are loaded.

A component that is not ready will only execute the [awake](#awake) method. As soon as the component is ready its [start](#start) method will be executed and it will join the next update cycle.

When using the component from another script, you should check this property to make sure the assets declared in its interface property are loaded before using them. you can safely use them in all methods of the component they belong to, with exception of its [awake](#awake) method.

If all the assets declared in its interface property are set to **preload** in the [AssetManager](/workflow/AssetManager) or have been **kept loaded** from previous scenes, the component will be immediately ready.

### Methods

All of the following methods are meant to be overridden. This means that they should be declared within your component class if you need them. But that's all you should do with them. They will be called internally by the engine and you should never call them in your code.

#### .awake

```typescript
awake(): void
```

If the scene is not running, the **awake** methods of all components in that scene are called by the engine right before the first render.

If the scene is running, this method is called by the engine immediately after the component is initialized.

#### .start

```typescript
start(): void
```

If the scene is not running, the start methods of all components in that scene are called by the engine right after the first render.

If the scene is running, this method is called by the engine as soon as the [isReady](#isReady) property of the component returns `true`, which means that all of the assets referenced in its [interface](#component-interface) are loaded.

#### .beforeUpdate

```typescript
beforeUpdate(): void
```

This method is called by the engine just before the [update](#update) method. It defines the very beginning of every frame for a component. It should be used exclusively for things that need to be available before all the [update](#update) methods are executed.

#### .update

```typescript
update(): void
```

This method is called by the engine just after [beforeUpdate](#beforeupdate) and right before [afterUpdate](#afterupdate). Here's where you, for example, move objects in your scene. Be mindful that this will be called every frame and will stack up with the rest of the components in your scene. Remember: keep your code tight and your frame rate high.

#### .afterUpdate

```typescript
afterUpdate(): void
```

This method is called by the engine just after [update](#update) and it marks the end of every cycle of the animation loop. Here's where you add things that need to happen after all the [update](#update) methods have been called.

#### .onBeforeRemoved

```typescript
onBeforeRemoved(): void
```

This method will be executed when the [removeComponent](/EngineAPI/Functions#removecomponent) method is called with this component as a parameter, just before removing it from the components map.

#### .onRemoved

```typescript
onRemoved(): void
```

This method will be executed when the [removeComponent](/EngineAPI/Functions#removecomponent) method is called with this component as a parameter, right after it has been effectively removed from the components map and the scene.

#### .onBeforeObjectRemoved

```typescript
onBeforeObjetRemoved(): void
```

This method will be executed just *before* the [remove](https://threejs.org/docs/#api/en/core/Object3D.remove) method for the `Object3D` to which this object belongs is called.

#### .onObjectRemoved

```typescript
onObjectRemoved(): void
```

This method will be executed right *after* the [remove](https://threejs.org/docs/#api/en/core/Object3D.remove) method for the [Object3D](https://threejs.org/docs/#api/en/core/Object3D) to which this object belongs is called.