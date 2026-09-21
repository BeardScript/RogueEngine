### ShaderPatch

A material can only carry one `onBeforeCompile` hook, and a game or a package may already be using it. ShaderPatch lets several contributors inject into the same shader without fighting over that slot.

Contributors run in order, and the program cache key includes each contributor's `key`, so a change recompiles for the right materials only. [CascadedShadows](/EngineAPI/CascadedShadows) and [TileSelection](/EngineAPI/TileSelection) are built on this.

### Types

#### PatchContributor

```typescript
type PatchContributor = {
  /** Stable name: used for ordering, for removal, and as part of the cache key. */
  id: string;
  /** Lower runs first. Defaults to 0. */
  order?: number;
  /** Injects into the shader three is about to compile. */
  hook(shader: any, material: THREE.Material): void;
  /** Everything about this contributor's output the compile depends on. */
  key?(material: THREE.Material): string;
};
```

### Methods

- `attach(material, contributor)`: adds a contributor to a material.
- `detach(material, id)`: removes a contributor by its id.
- `refresh(material)`: recompiles a material with its current contributors.
- `sync()`: applies queued changes. The engine calls this for you.
- `contributors(material)`: the contributors on a material.
