### CascadedShadows

A directional light's shadow map is spread over everything its range covers, so a big level ends up with soft shadows and nothing in them. Cascading shadows split that range into a few cascades at increasing distance, each with its own resolution, so what is near you stays sharp.

Tick **Cascaded** on a Directional Light to turn them on. New scenes come with their sun already cascaded, and lights added from the Add menu too.

```typescript
RE.CascadedShadows.enable(sun, { cascades: 3, maxFar: 300, fade: true });
```

Only one directional light drives cascades at a time. Any other visible directional light is stood down and put back exactly as it was, so nothing else in your scene has to change.

### Types

#### CascadedShadowSettings

```typescript
type CascadedShadowSettings = {
  /** How many cascades to split the range into. */
  cascades?: number;
  /** Distance past which nothing is shadowed. */
  maxFar?: number;
  /** Fade the shadows out towards `maxFar` instead of cutting them off. */
  fade?: boolean;
  /** How the distance is split between cascades. */
  mode?: 'practical' | 'uniform' | 'logarithmic';
  shadowMapSize?: number;
  /** How far past the view, along the light, casters still count. */
  lightMargin?: number;
  /** Near plane of the cascade cameras. */
  lightNear?: number;
  /** Far plane of the cascade cameras. */
  lightFar?: number;
};
```

The defaults come from the shadow camera the light already has, so they fit your project's units instead of assuming metres.

### Properties

- `DEFAULTS`: the default settings.
- `minCascades` / `maxCascades`: the fewest and the most cascades a light can have (`1` and `4`).
- `SETTINGS_KEY`: where a light keeps its settings on its `userData`, so they save with the scene.

### Methods

- `enable(light, settings?)`: turns cascades on for a light, or updates what they use. A call that names only some of the values changes only those. This is the same thing the **Cascaded** checkbox does.
- `configure(light, settings?)`: the alias `enable` calls.
- `disable(light)`: turns them off, handing the light and the materials back.
- `settingsOf(light)`: the settings on a light, or `undefined` when it doesn't use cascades.
- `prepareForSerialization(root)`: puts back, in the copy being written, what this changed on other objects.
- `update(scene, camera)`: rebuilds the cascades for the frame. The engine calls this for you.
