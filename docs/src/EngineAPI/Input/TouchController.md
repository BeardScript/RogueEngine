### TouchController

The **TouchController** class keeps track of touch events and provides access to these interactions. This class is instanced by the [Input](/EngineAPI/input) controller, and that's the only place where it should be used. For that reason, this class is not exposed by the engine.

## Properties

#### .startTouches

```typescript
readonly startTouches: TouchInteraction[]
```

An array of [TouchInteraction](/EngineAPI/input/touchinteraction) objects which contains all touch events that have started in the current frame.

#### .endTouches

```typescript
readonly endTouches: TouchInteraction[]
```

An array of [TouchInteraction](/EngineAPI/input/touchinteraction) objects which contains all touch events that have ended in the current frame.

#### .touches

```typescript
readonly touches: TouchInteraction[]
```

An array of [TouchInteraction](/EngineAPI/input/touchinteraction) objects which contains all touch events that are still happening in the current frame.

#### .enabled

```typescript
enabled: boolean
```

This property is used to enable and disable the **TouchController**

## Methods

#### .init

```typescript
init(): void
```

This method initializes the touch events for the **TouchController**. This is used internally by the engine and you should never need call it.


## TouchInteraction Type

```typescript
type TouchInteraction = {
    id: string;
    touch: Touch;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
}
```

This type provides relevant information of a touch interaction by the user.
