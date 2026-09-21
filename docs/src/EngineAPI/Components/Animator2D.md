### Animator2D

Animates frames from a [TextureArray](/EngineAPI/TextureArray), so an animated sprite keeps the same material as everything else and batches with the rest of your scene.

A clip is a run of layers: the first frame and the last, both included and consecutive. Looping is the default, one shots are asked for. Sheets are sliced in the array inspector, never in this component, so materials stay shared.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| clips | vector2 map | `{}` | Named animations. `x` is the first frame and `y` the last, both included. |
| fps | number | `12` | Frames per second. |
| playOnStart | checkbox | `true` | Play the selected animation when the scene starts. |
| randomStart | checkbox | `false` | Start on a random frame of the range, so copies aren't in step. |
| fitFrames | checkbox | `false` | Fit the object's width to the frame's shape, so non square cells aren't squashed. |
| target | object3d | | Object to animate. Empty uses this object, or the first child with a material. |
| selected | select | `0` | The animation to play by default, and to preview. |

### Methods

- `play(name?, config?)`: starts an animation by name, or the selected one when no name is given. The flips stay on for later calls, so a clipped character keeps facing left.
- `stop()`: stops on the frame it's showing.
- `preview()`: plays the selected clip in the viewport. This is the editor button.
- `onAnimationFinished(callback)`: runs when a one shot reaches its last frame.

### Properties

- `flipX` / `flipY`: mirror the frames. The mirror lands on this object's own geometry, so nothing else wearing it flips.
- `selectedOptions`: the animation names, in clip order.

### Play config

```typescript
type PlayConfig2D = {
  /** Play it through and stop on the last frame, instead of looping. */
  once?: boolean;
  /** Mirror the frames horizontally. Stays until it is changed again. */
  flipX?: boolean;
  /** Mirror the frames vertically. */
  flipY?: boolean;
  /** Runs when a one shot reaches its last frame. */
  onFinish?: () => void;
};
```

```typescript
import * as RE from 'rogue-engine';
...
const animator = RE.Animator2D.get(this.object3d);

animator.play("explode", { once: true, flipX: true, onFinish: () => {} });
```
