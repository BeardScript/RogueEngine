### GamepadController

The **GamepadController** class contains the functionality to keep track of Gamepad interactions. This class is instanced in the **Input** controller, and that's the only place where it should be used. For that reason, this class is not exposed by the engine.

This is just an abstraction of the [Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) API. To learn about the mapping of all the buttons of a controller visit [gamepad-tester.com](https://gamepad-tester.com/)

## Props

#### .deadZone

```typescript
axesErrorMargin: number = 0.1;
```

Axes most usually have a margin of error. Their rest value will not be 0. If the raw absolute value of an axis is smaller or equal to `axesErrorMargin`, `getAxis` will return `0`.

#### .gamepad

```typescript
readonly gamepad: Gamepad;
```

This property holds the [Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) object associated to this `GamepadController`.

## Methods

#### .getAxis

```typescript
getAxis(index: number): number
```

This method returns the numeric value of the axis (from -1 to 1) at the given index. Most usually `0` and `1` will be the horizontal and vertical axes of the left stick respectively, while `2` and `3` will be the horizontal and vertical axes of the right stick.

To learn about the mapping of all the buttons for the Gamepad API visit [gamepad-tester.com](https://gamepad-tester.com/)

#### .getButton

```typescript
getButton(index: number): number
```

This method returns the numeric value (from 0 to 1) for the button at the given index. a value of `0` means the button is not being pressed and `1` means it's fully pressed.

This uses a value since, some buttons like the left and right triggers (usually `6` and `7` respectively), are listed as buttons and not axes.

To learn about the mapping of all the buttons of a controller visit [gamepad-tester.com](https://gamepad-tester.com/)

#### .getButtonDown

```typescript
getButtonDown(index: number)
```

This method tells us if the button at the given index has been pressed in the current frame. If true, it will return false in the next frame.

To learn about the mapping of all the buttons of a controller visit [gamepad-tester.com](https://gamepad-tester.com/)

#### .getButtonUp

```typescript
getButtonUp(index: number)
```

This method tells us if the button at the given index has been released in the current frame. If true, it will return false in the next frame.

To learn about the mapping of all the buttons of a controller visit [gamepad-tester.com](https://gamepad-tester.com/)
