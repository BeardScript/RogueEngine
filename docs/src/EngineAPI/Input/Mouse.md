### Mouse

The **Mouse** class keeps track of mouse events and provides access to these interactions. This class is instanced by the [Input](/EngineAPI/Input) controller, and that's the only place where it should be used. For that reason, this class is not exposed by the engine.

## Properties

#### .x

```typescript
readonly x: number
```

This is the position of the mouse on the x-axis of the screen. This is analogous to the **clientX** property of the **MouseEvent**.

#### .y

```typescript
readonly y: number
```

This is the position of the mouse on the y-axis of the screen. This is analogous to the **clientY** property of the **MouseEvent**.

#### .movementX

```typescript
readonly movementX: number
```

This is the movement of the mouse on the x-axis of the screen. This is analogous to the **movementX** property of the **MouseEvent**.

#### .movementY

```typescript
readonly movementY: number
```

This is the movement of the mouse on the y-axis of the screen. This is analogous to the **movementY** property of the **MouseEvent**.

#### .wheelX

```typescript
readonly wheelX: number
```

This represents the horizontal scrolling amount. This is analogous to the **deltaX** property of the **WheelEvent**.

#### .wheelY

```typescript
readonly wheelY: number
```

This represents the vertical scrolling amount. This is analogous to the **deltaY** property of the **WheelEvent**.

#### .isMoving

```typescript
readonly isMoving: boolean
```

A handy flag which tells us if the mouse is moving.

#### .isLeftButtonDown

```typescript
readonly isLeftButtonDown: boolean
```

A flag which tells us if the left mouse button has been pressed in the current frame. If true, will be set to false in the next frame.

#### .isLeftButtonPressed

```typescript
readonly isLeftButtonPressed: boolean
```

A flag which tells us if the left mouse button is being pressed. If true, will be set to false when the button is released.

#### .isLeftButtonUp

```typescript
readonly isLeftButtonUp: boolean
```

A flag which tells us if the left mouse button has been released in the current frame. If true, will be set to false in the next frame.

#### .isRightButtonDown

```typescript
readonly isRightButtonDown: boolean
```

A flag which tells us if the right mouse button has been pressed in the current frame. If true, will be set to false in the next frame.

#### .isRightButtonPressed

```typescript
readonly isRightButtonPressed: boolean
```

A flag which tells us if the right mouse button is being pressed. If true, will be set to false when the button is released.

#### .isRightButtonUp

```typescript
readonly isRightButtonUp: boolean
```

A flag which tells us if the right mouse button has been released in the current frame. If true, will be set to false in the next frame.

#### .isMidButtonDown

```typescript
readonly isMidButtonDown: boolean
```

A flag which tells us if the middle mouse button has been pressed in the current frame. If true, will be set to false in the next frame.

#### .isMidButtonPressed

```typescript
readonly isMidButtonPressed: boolean
```

A flag which tells us if the middle mouse button is being pressed. If true, will be set to false when the button is released.

#### .isMidButtonUp

```typescript
readonly isMidButtonUp: boolean
```

A flag which tells us if the middle mouse button has been released in the current frame. If true, will be set to false in the next frame.

#### .pointerLock

```typescript
readonly pointerLock: PointerLockControls | undefined
```

This property provides the instance of the Threejs **PointerLockControls** being used by this **Mouse** instance to handle locking the mouse pointer. Until the mouse is locked, this property remains undefined.

#### .enabled

```typescript
enabled: boolean
```

Setting this property, disables or enables the mouse controls.

## Methods

#### .lock

```typescript
lock(): void
```

Handy function to lock the mouse pointer using the three js **PointerLockControls** instance referenced in the **pointerLock** property.