### Animator

Plays and blends the animations assigned to an object. It exposes a three.js [AnimationMixer](https://threejs.org/docs/#api/en/animation/AnimationMixer), the actions for each clip, and helpers to crossfade between them.

Give it the clips you want through the **clips** map (keyed by clip name), pick the one to preview with **selected**, and it handles the rest.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| clips | animation map | `{}` | The clips to play, keyed by name. |
| selected | select | `0` | The clip to preview in the editor. |
| excludeBones | object3d list | `[]` | Bones whose animation transforms are preserved, not overwritten. |
| excludeRecursive | checkbox | `false` | Whether exclusion applies to the bones' children. |
| play | button | | Editor play and stop preview for the selected clip. |

### Methods

- `play()`: plays the selected clip. This is the editor preview button.
- `stop(duration = 0)`: stops the current animation over the given duration.
- `resume()`: cancels a stop and resumes playback.
- `mix(actionName, transitionTime = 0.1, weight = 1, warp = true)`: crossfades from the current action to the named one.
- `addAction(key, clip)`: adds an action for a clip.
- `setBaseAction(actionName)`: sets the base (blend target) action.
- `setWeight(action, weight, smooth?)`: sets the effective weight of an action, optionally smoothed.
- `getAction(name)`: the action for a clip name.
- `getWeight(action)`: the effective weight of an action.
- `getRootBone()`: the first bone found in the object hierarchy.
- `onAnimationFinished(callback)`: runs a callback when an animation finishes.

### Properties

- `actions: Record<string, AnimationAction>`: the actions for the assigned clips.
- `activeAction: AnimationAction`: the currently active action.
- `baseAction` (get/set): the base action.
- `selectedAction: AnimationAction`: the action for the selected clip.
- `mixer`: the underlying three.js AnimationMixer, built lazily.
- `animations: AnimationClip[]`: the assigned clips.
