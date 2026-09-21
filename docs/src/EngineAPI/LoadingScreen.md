### LoadingScreen

A load used to be a black screen you couldn't tell apart from a freeze. There's a loading screen now: the Rogue mark spinning, the name of the scene, and a progress bar under it.

It comes up on its own wherever a scene is loaded for you: the first scene of a build, a page that plays a scene itself, and a Play in the editor, where it covers the Scene view rather than the whole editor. There's nothing to wire up for any of that.

Models are the only thing the bar can count, so as they build it reads `Building models (3/8)`. While the scene file and its assets load, the bar runs its moving animation instead.

### Loading another scene

Loading a scene while the game runs is where you decide. A scene load shows the screen only when you ask it to:

```typescript
// Covered: a screen goes up while Level 2 loads.
await RE.App.loadScene("Level 2", true);

// Not covered: a quick swap, or one you cover yourself.
await RE.App.loadScene("Level 2");
```

### Using it for your own load

You can also use it for a load that isn't a scene:

```typescript
import * as RE from 'rogue-engine';
...
await RE.LoadingScreen.show("Loading my level");
RE.LoadingScreen.progress(3, 12); // Optional, for a bar you fill yourself.
RE.LoadingScreen.hide();
```

`show` waits for the screen to be painted before it returns, so a load that follows can't start before the screen is up.

### Swapping it for your own

A screen is any object with `show(name)`, `hide()` and `progress(loaded, total)`. It's drawn inside whatever element the game renders into, so it can be your own markup:

```typescript
RE.LoadingScreen.set({
  show: (name) => myScreen.open(name),
  hide: () => myScreen.close(),
  progress: (loaded, total) => myScreen.setBar(total ? loaded / total : 0),
});

RE.LoadingScreen.set(false); // No screen at all.
```

If your screen throws, the error is logged and the load finishes anyway.

### Methods

- `show(name?)`: shows the screen, and waits for it to be painted before returning.
- `hide()`: takes the screen down, once the scene is running.
- `progress(loaded, total)`: how far the load has got, forwarded to whichever screen is showing.
- `set(screen)`: replaces the engine's screen with yours, or with `false` for no screen at all.

### Properties

- `isShowing`: whether a screen is showing right now.
- `hasCustom`: whether a screen of your own is set.
