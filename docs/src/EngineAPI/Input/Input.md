### Input

The **Input** controller provides references to the mouse keyboard and touch controllers as well as a list of the connected gamepads.

You can use these to handle user input on your project. No need to go around creating listeners everywhere. Any other input sources being maintained by the engine in the future will be added here.

It also provides an action-based system to help you easily bind, rebind and set multiple mappings for different input devices.

As an example, you could have a mapping to control a character with gamepad or mouse and keyboard, and a second mapping to drive for when your character jumps into a car.

#### .mouse

```typescript
mouse: Mouse
```

The [Mouse](/EngineAPI/Input/Mouse) instance being used to handle mouse events.

#### .keyboard

```typescript
keyboard: Keyboard
```

The [Keyboard](/EngineAPI/Input/Keyboard) instance being used to handle keyboard events.

#### .touch

```typescript
touch: Touch
```

The [Touch](/EngineAPI/Input/TouchController) instance being used to handle touch events.

#### .gamepads

```typescript
gamepads: GamepadController[]
```

A list of [GamepadController](/EngineAPI/Input/GamepadController) instances being used to handle gamepad interactions. It holds all the active Gamepads in order of activation.


#### .playerInputs

```typescript
playerInputs: {
  MouseAndKeyboard: number;
  Gamepads: number[];
}
```

This is the input configuration for all players, where the numeric values represent the index of the player (0 is player 1, etc.)

**Default**

```typescript
{
  MouseAndKeyboard: 0, // Player 1 will use Mouse and keyboard
  Gamepads: [0], // Player 1 will use gamepad at 0
}
```

**Example**

```typescript
RE.Input.playerInputs = {
  MouseAndKeyboard: 1, // Player 2 will use Mouse and keyboard
  Gamepads: [0, 2], // Player 1 will use the first detected gamepad and Player 3 will use the second.
}

// Add the third gamepad for player 4
RE.Input.playerInputs.Gamepads[2] = 3;
```

### Methods

#### .setActionMap

<!-- ```typescript
setActionMap(bindings: InputAction): void
``` -->

<div class="language-typescript extra-class">
<pre class="language-typescript">
<code><span class="token function">setActionMap</span>(bindings: <a href="#inputaction-type">GamepadAxes</a>): void
</code></pre></div>

Set the Input bindings for the actions in your app by passing in an [InputAction](#inputaction-type) object. This will replace any existing bindings.

**Example**

```typescript
// By default it's set in the following way:
Input.setActionMap({
  Move: {
    type: "Axes",
    Keyboard: ["KeyW", "KeyS", "KeyA", "KeyD"],
    Gamepad: {x: 0, y: 1},
    Touch: {area: "left", normalize: [10, 10]},
  },
  Look: {
    type: "Axes",
    Gamepad: {x: 2, y: 3, mult: [5, 2]},
    Mouse: [0.5, 0.5],
    Touch: {area: "right", mult: [2, 2]},
  },
  Jump: { type: "Button", Keyboard: "Space", Gamepad: 0, Touch: 1 },
  Fire: { type: "Button", Mouse: 0, Gamepad: 7, Touch: 0 },
  Select: { type: "Button", Mouse: 0, Touch: "Tap" },
});
```

#### .bindAxes

<div class="language-typescript extra-class">
<pre class="language-typescript">
<code><span class="token function">bindAxes</span>(actionName: string, bind: {
  Gamepad?: <a href="#gamepadaxes-type">GamepadAxes</a>,
  Keyboard?: <a href="#keyboardaxes-type">KeyboardAxes</a>,
  Mouse?: <a href="#mouseaxes-type">MouseAxes</a>,
  Touch?: <a href="#touchaxes-type">TouchAxes</a>,
}, player?: number): void
</code></pre></div>

Set the Input bindings for an axes-based action. Check out the [Types](#inputaction-type) section to see the structure.

You can define a binding for any or all input devices at once.

You can pass in an optional index parameter to set the mapping only for a specific player's configuration. This will only make sense for the case of Gamepads, naturally.

**Example**

```typescript
// Set the Move action for player 2 to use the right stick.
RE.Input.bindAxes("Move", {Gamepad: {x: 2, y: 3}}, 1);

// This will replace the existing defualt binding of axis 0 and set
// it to the Steer action.
RE.Input.bindAxes("Steer", {Gamepad: {x: 0}});
// To prevent that create a separate mapping using the Mapping.Action
// pattern. This will create a separate, independent mapping.
// Here we also omit the y axis and use only the horizontal axis.
RE.Input.bindAxes("Vehicle.Steer", {Gamepad: {x: 0}, Keyboard: [,,"KeyA", "KeyD"]});

// Trigger the Look function with multiple bindings
RE.Input.bindAxes("Look", {
  // Using the left stick with an optional multiplier to adjust the
  // sensitivity and direction.
  Gamepad: {x: 2, y: 3, mult: {x: 5, y: -2},
  // To use the mouse we must pass in the sensitivity. In this case,
  // we're cutting it by half.
  Mouse: [0.5, 0.5],
  // We're using the movement on the right side of the touch screen
  // and passing in an optional multiplier to adjust the sensitivity
  // and direction
  Touch: {area: "right", mult: [2, 2]},
}});
```

#### .bindButton

```typescript
bindButton(actionName: string, bind: {
  Gamepad?: number,
  Keyboard?: string,
  Mouse?: number | "WheelUp" | "WheelDown",
  Touch?: number | "Tap",
}, player?: number): void
```

Set the Input bindings for an button-based action. You can define a binding for any or all input devices at once.

You can pass in an optional index parameter to set the mapping only for a specific player's configuration. This will only make sense for the case of Gamepads, naturally.

In the case of the Gamepad, the number represents a gamepad button same as for the [GamepadController](/EngineAPI/Input/GamepadController).

In the case of the Keyboard, the string reprensents the standard [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)

In the case of the Mouse, we can pass in the standard button number or "WeelUp"/"WeelDown" to capture the sequential wheel movement.

In the case of the Touch, we can pass in the button index as defined in [RE.Input.touch.buttons](/EngineAPI/Input/TouchController#buttons) or alternatively, the "Tap" action detects a single tap on the screen.

**Example**

```typescript
// Set a "Jump" action to trigger with the Space key, Gamepad button 0 or the Touch button 1
RE.Input.bindButton("Jump", {Keyboard: "Space", Gamepad: 0, Touch: 1});
// Set a "Select" action to trigger whith the left mouse button or a Tap on the screen.
RE.Input.bindButton("Select", {Mouse: 0, Touch: "Tap"});

// This will replace the existing binding of the left mouse button to be used for DoStuff
RE.Input.bindButton("DoStuff", {Mouse: 0});
// To prevent that, create a separate mapping using the Mapping.Action
// pattern. This will create a separate, independent mapping.
RE.Input.bindButton("MyMapping.DoStuff", {Mouse: 0});
```

<!-- #### .getBindings

```typescript
getBindings(actionName: string): InputAxesBinds | InputBinds
```

Return the bindings for the given action. Check out the [Types](#inputaction-type) section to see the structure. -->


#### .getAxes

```typescript
getAxes(name: string, player?: number): { x: number, y: number }
```

You can use this in any of the game loop methods to listen for an axes-based action in your app, by passing in the action name and optionally, the player index to capture the given action from a specific player.

It returns a Vector 2 with the values provided by the input devices as configured for that action.

**Example**

```typescript
import * as RE from "rogue-engine";
...
update() {
  let {x, y} = RE.Input.getAxes("Move");
  
  // Moving the Object3D containing this component with
  // the values returned by the Move action.
  this.object3d.position.x += x;
  this.object3d.position.z += y;
}
```

#### .getDown

```typescript
getDown(name: string, player?: number): boolean
```

Captures a button-based action in the frame that it's being triggered. You need to pass in the action name and optionally, the player index to capture the given action from a specific player.

**Example**

```typescript
import * as RE from "rogue-engine";
...
update() {
  if (RE.Input.getDown("Jump")) {
    this.jump();
  }
}
```

#### .getUp

```typescript
getUp(name: string, player?: number): boolean
```

Captures a button-based action in the frame that it's being released. You need to pass in the action name and optionally, the player index to capture the given action from a specific player.

**Example**

```typescript
import * as RE from "rogue-engine";
...
update() {
  if (RE.Input.getUp("Select")) {
    this.picked = RE.pick(RE.Runtime.scene.children);
  }
}
```


#### .getPressed

```typescript
getPressed(name: string, player?: number): number | true
```

Captures a button-based action on every frame that it's active. You need to pass in the action name and optionally, the player index to capture the given action from a specific player.

**Example**

```typescript
import * as RE from "rogue-engine";
...
update() {
  if (RE.Input.getDown("Fire")) {
    this.rainbowPrefab.instantiate();
  }
}
```


#### .getPlayerConfig

```typescript
getPlayerConfig(player?: number): {
  gamepadIndex: number | undefined;
  useMouseAndKeyboard: boolean;
}
```

Retrieves the input configuration for a specific player, given its index.

### Types

#### GamepadAxes Type

```typescript
type GamepadAxes = {
  x?: number,
  y?: number,
  mult?: [x: number, y: number],
} | [
  up?: number, 
  down?: number, 
  left?: number, 
  right?: number, 
  mult?: [xMult: number, yMult: number]
]
```

This is the representation of the axes bindings for a Gamepad. These can be either a object with either or both x and y fields, or an array with a set of buttons. In both cases we can pass in a multiplier to determine the sensitivity and direction.

In the case of the object, we can pass both or either the x and y parameters, making it effectively a one dimensional vector. Likewise, in the case of the array we can omit some directions to receive input only for a certain direction that we care about.

The x and y parameters should be the index for an axis in the gamepad, same as with the [GamepadController](/EngineAPI/Input/GamepadController). These are used for the analog sticks.

The up/down/left/right will take the button number in a gamepad, same as with the [GamepadController](/EngineAPI/Input/GamepadController). This is suitable, for instance, to define movement with the d-pad.

**Example**

```typescript
// Trigger the Move action using the left stick
RE.Input.bindAxes("Move", {Gamepad: {x: 0, y: 1}});

// Trigger the Move action for player 2 using the d-pad
RE.Input.bindAxes("Move", {Gamepad: [12, 13, 14, 15]}, 1);

// You can optionally pass in a multiplier vector to adjust the sensitivity and direction.
RE.Input.bindAxes("Move", {Gamepad: [12, 13, 14, 15, [0.5, 0.5]]}, 1);

// Trigger the Look function with the right stick and pass in an optional multiplier vector 
// to adjust the sensitivity and direction.
RE.Input.bindAxes("Look", {Gamepad: {x: 2, y: 3, mult: {x: 5, y: -2}}});
```

#### KeyboardAxes Type

```typescript
type KeyboardAxes = [
  up?: string, 
  down?: string, 
  left?: string, 
  right?: string, 
  mult?: [xMult: number, yMult: number]
]
```

This is the representation of the axes bindings for the Keyboard. These are passed in the form of an array of standard key strings and an optional multiplier to determine the sensitivity and direction.

we can omit some directions to receive input only for a certain direction that we care about, making it effectively a one dimensional vector.

**Note:** see [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values) for a list of the accepted code values.

**Example**

```typescript
// Trigger the Move action using WASD
RE.Input.bindAxes("Move", {Keyboard: ["KeyW", "KeyS", "KeyA", "KeyD"]});
```

#### MouseAxes Type

```typescript
type MouseAxes = [xMult: number, yMult: number]
```

This is the representation of the mouse movement binding. It takes an array to define the sensitivity and direction on the x and y axis respectively.

**Example**

```typescript
// Trigger the Look action using the Mouse movement with full sensitivity
// and with the y axis flipped.
RE.Input.bindAxes("Look", {Mouse: [1, -1]});
```


#### TouchAxes Type

```typescript
type TouchAxes = {
  area: "left" | "right" | "view",
  mult?: [x: number, y: number],
  normalize?: [radiusX: number, radiusY: number],
} | [
  up?: number, 
  down?: number, 
  left?: number, 
  right?: number, 
  mult?: [xMult: number, yMult: number],
]
```

This is the representation of the axes bindings for the [TouchController](/EngineAPI/Input/TouchController). These can be either a object with the touch area and a normalize option, or an array with a set of buttons. In both cases we can pass in a multiplier to determine the sensitivity and direction.

In the case of the object, we must pass in the area to be either the entire "view", the "left" half or the "right" half. The normalize field lets us define a distance in pixels where our movement will go from 0 to 1 like an analog stick. Very useful for things like movement.

The up/down/left/right will take the button index in [RE.Input.touch.buttons](/EngineAPI/Input/TouchController#buttons). This is suitable, for instance, to define movement with touch buttons on the screen, such as the steering in a car game.

**Example**

```typescript
// Trigger the Move action using the left half of the touch screen. We pass in the optional normalize array
// to set a maximum travel distance of 10, effectively turning the left side of the touch screen into an analog stick
RE.Input.bindAxes("Move", {Touch: {area: "left", normalize: [10, 10]}});

// Trigger the Move action for player 2 using 4 touch buttons with their given index at RE.Input.touch.buttons
RE.Input.bindAxes("Move", {Touch: [2, 3, 0, 1]}, 1);

// You can optionally pass in a multiplier vector to adjust the sensitivity and direction.
RE.Input.bindAxes("Move", {Touch: [2, 3, 0, 1, [0.5, 0.5]]}, 1);

// Trigger the Look function with the right half of the touch screen and pass in an optional multiplier vector 
// to adjust the sensitivity and direction.
RE.Input.bindAxes("Look", {Touch: {area: "right", mult: [2, 2]}});
```

#### InputAction Type

```typescript
type InputAction = {
  [name: string]: InputAxesBinds | InputBinds;
}
```

#### InputAxesBinds Type

<div class="language-typescript extra-class">
<pre class="language-typescript">
<code>type InputAxesBinds = {
  type: "Axes",
  Gamepad?: <a href="#gamepadaxes-type">GamepadAxes</a>,
  Keyboard?: <a href="#keyboardaxes-type">KeyboardAxes</a>,
  Mouse?: <a href="#mouseaxes-type">MouseAxes</a>,
  Touch?: <a href="#touchaxes-type">TouchAxes</a>,
}
</code></pre></div>


This is the representation of the bindings for an axes-based action. Click on each type to see their definitions.


#### InputBinds Type

```typescript
type InputBinds = {
  type: "Button";
  Keyboard?: string;
  Mouse?: number | "WheelUp" | "WheelDown";
  Gamepad?: number;
  Touch?: number | "Tap";
}
```

This is the representation of the bindings for a button-based action.

In the case of the Gamepad, the number represents a gamepad button same as for the [GamepadController](/EngineAPI/Input/GamepadController).

In the case of the Keyboard, the string reprensents the standard [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)

In the case of the Mouse, we can pass in the standard button number or "WeelUp"/"WeelDown" to capture the sequential wheel movement.

In the case of the Touch, we can pass in the button index as defined in [RE.Input.touch.buttons](/EngineAPI/Input/TouchController#buttons) or alternatively, the "Tap" action detects a single tap on the screen.
