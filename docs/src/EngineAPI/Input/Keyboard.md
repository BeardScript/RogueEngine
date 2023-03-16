### Keyboard

The **Keyboard** class contains the functionality to keep track of Keyboard actions. This class is instanced in the **Input** controller, and that's the only place where it should be used. For that reason, this class is not exposed by the engine.

**Note:** see [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values) for a list of the accepted code values.

## Methods

#### .getKeyDown

```typescript
getKeyDown(keyCode: string)
```

This method tells us if the key with the given code has been pressed in the current frame. If true, will be set to false in the next frame.

#### .getKeyPressed

```typescript
getKeyPressed(keyCode: string)
```

This method tells us if the key with the given code is being pressed. If true, will be set to false when the button is released.

#### .getKeyUp

```typescript
getKeyUp(keyCode: string)
```

This method tells us if the key with the given code has been released in the current frame. If true, will be set to false in the next frame.