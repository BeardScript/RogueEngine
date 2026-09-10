### BVH

Raycasting is fine with a few objects and falls apart with a whole level. **BVH** accelerates `Mesh.raycast` across the board with a bounding volume hierarchy, powered by [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh).

The engine swaps `Mesh.prototype.raycast` for a drop in replacement that uses a per geometry bounds tree when one exists (which makes rays hundreds of times faster) and three.js's own raycast otherwise. You don't need to do anything to get it working.

Trees are built lazily and only for the meshes that rays actually reach, so you don't pay for it until you need it. The tree lives in the geometry's local space and the ray is transformed by the mesh's current matrix, so anything rigid is safe. Moving, rotating, parented, or even parented to a bone, like [hit mesh](/EngineAPI/HitMesh) pieces.

Skinned meshes and morph target geometry are excluded automatically, since they have their own pose handling. You can also opt any individual mesh out by setting `userData.bvh = false` on it.

### Properties

#### .auto

```typescript
static auto: boolean;
```

Whether trees are built automatically on the first reachable raycast. It defaults to `true`. Set it to `false` if you want full control over when trees get built.

### Methods

#### .prepare

```typescript
prepare(mesh: THREE.Mesh): boolean
```

Builds a tree for a rigid mesh right away, for example at load time. It respects the same opt-outs and exclusions as the automatic path, and returns `true` if a tree was built.

#### .refit

```typescript
refit(mesh: THREE.Mesh): boolean
```

Refits an existing tree after you edit a mesh's vertices in place. Use this if you're deforming geometry at runtime, since otherwise the tree would go stale.

#### .dispose

```typescript
dispose(mesh: THREE.Mesh): boolean
```

Drops a mesh's tree, falling back to the stock raycast. Returns `true` if there was a tree to drop.

#### .disposeGeometry

```typescript
disposeGeometry(geometry: THREE.BufferGeometry): boolean
```

Drops the tree of a specific geometry, without needing the mesh around. Returns `true` if there was a tree to drop.
