### Input

The **Input** controller is a very simple singleton that provides references to the input object instances.

You can use these to handle user input on your project. No need to go around creating listeners everywhere. Any other input sources being maintained by the engine in the future will be added here.

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
