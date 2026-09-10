### HitMesh

Skinned meshes have always been the slow and unreliable case for raycasting. CPU skinning per ray, poses that lie off bind, decals that never stick where they should.

**HitMesh** fixes this the standard way, with a subdivided hit box. It splits a skinned mesh into rigid invisible pieces, one per bone, and parents each piece under its bone. The pieces follow the animation exactly and are fast to raycast, since each one gets its own [BVH](/EngineAPI/BVH). Static meshes get a single exact ghost, so objects moved by physics are hittable too.

The usual way to use this is from the editor: right click a 3D model file and choose **Generate Hit Mesh**. The pieces are serialized as model stubs, so scenes and prefabs stay lean, and they're regenerated on rehydration with any components you added to them preserved. This API exists for when you want to generate and attach hit meshes from code.

### Properties

#### .TAG

```typescript
TAG: string
```

The userData marker used on generated ghost meshes, `"rogueHitMesh"`.

### Methods

#### .isMesh

```typescript
isMesh(object: THREE.Object3D): boolean
```

Returns `true` when the given object is one of the generated ghost meshes.

#### .generate

```typescript
generate(root: THREE.Object3D): ModelHitGeneration
```

Builds (but does not attach) the hit pieces for every mesh under the given root. It returns a `ModelHitGeneration` with a `rigged` array of skinned mesh pieces, one per bone, and a `static` array with an exact ghost for each static mesh.

#### .attach

```typescript
attach(root: THREE.Object3D, gen: ModelHitGeneration): THREE.Mesh[]
```

Attaches previously generated pieces: the rigged ones go under their live bones and the static ones under their source mesh. It returns the list of created ghost meshes.

#### .remove

```typescript
remove(root: THREE.Object3D): void
```

Removes every attached ghost under the given root and disposes its resources. Call this before regenerating.

#### .exportScene

```typescript
exportScene(gen: ModelHitGeneration): THREE.Group
```

Builds an exportable scene group out of a generation, with bone-named nodes that each carry their ghost mesh as a child. This is what the engine uses to store hit meshes with a model.
