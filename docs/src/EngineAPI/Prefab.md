### Prefab

A Prefab is a predefined [Object3D](https://threejs.org/docs/#api/en/core/Object3D) that we store in a **.roguePrefab** file along with all components associated to the object itself or its children.

An instance of this class provides the information to load a Prefab and the means to instantiate it.

## Properties

#### .uuid

```typescript
readonly uuid: string;
```

The unique identifier for the Prefab.

#### .path

```typescript
readonly path: string;
```

The current path to the Prefab file.

#### .name

```typescript
readonly name: string;
```

The name of the Prefab.

## Methods

#### .instantiate

```typescript
instantiate(parent?: THREE.Object3D): THREE.Object3D;
```

This method instantiates the Prefab either directly into the Scene or, optionally, a given [Object3D](https://threejs.org/docs/#api/en/core/Object3D).