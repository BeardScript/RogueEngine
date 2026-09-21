### Built-in Components

The engine ships a set of built-in components that cover the needs of most projects. They're regular components, so you add them to objects the same way you add your own: select the object and pick one from the **Add Component** list.

Some of them you'll almost certainly use from the editor only, like the UI elements or the audio players. Others are meant to be extended from code. Since they're all exported from `rogue-engine`, you can import them and extend them like any class. The weapon pipeline is built around this, for example:

```typescript
import * as RE from 'rogue-engine';

export class MyWeapon extends RE.Weapon {
  onHit = (projectile: RE.Projectile, hits: THREE.Intersection[]) => {
    // Your damage logic here.
  }
}
```

They're grouped into families in the sidebar:

- **Audio**: [AudioPlayer](/EngineAPI/Components/AudioPlayer), [AudioPlayer3D](/EngineAPI/Components/AudioPlayer3D), [AudioMixer](/EngineAPI/Components/AudioMixer), [AudioEffect](/EngineAPI/Components/AudioEffect), [AudioDelay](/EngineAPI/Components/AudioDelay), [AudioReverb](/EngineAPI/Components/AudioReverb), [SoundEnvironment](/EngineAPI/Components/SoundEnvironment). See the [Audio](/Workflow/Audio) guide to get started.
- **Combat**: [Character](/EngineAPI/Components/Character), [Weapon](/EngineAPI/Components/Weapon), [Projectile](/EngineAPI/Components/Projectile), [HitSpot](/EngineAPI/Components/HitSpot), [SurfaceFXManager](/EngineAPI/Components/SurfaceFXManager). See the [Combat](/Workflow/Combat) guide to get started.
- **Core**: [Animator](/EngineAPI/Components/Animator), [Animator2D](/EngineAPI/Components/Animator2D), [StatsPanel](/EngineAPI/Components/StatsPanel), [DirectionalLight](/EngineAPI/Components/DirectionalLight), [OrbitCamera](/EngineAPI/Components/OrbitCamera), [Switch](/EngineAPI/Components/Switch), [SelfDestroy](/EngineAPI/Components/SelfDestroy), [Decal](/EngineAPI/Components/Decal).
- **UI**: the full [UI system](/EngineAPI/Components/UIElement), from containers and buttons to sliders, dialogs and the 3D hosts [CSS2D](/EngineAPI/Components/CSS2D) and [HTMLMeshComponent](/EngineAPI/Components/HTMLMeshComponent). See the [UI](/Workflow/UI) guide to get started.

For the low level pieces that power the combat system, check out [HitMesh](/EngineAPI/HitMesh) and [BVH](/EngineAPI/BVH).
