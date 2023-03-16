### Tags

This class is is in charge of managing tags. Tags are a simple way to classify objects in our project.

For instance, you could have a "human" tag, to identify a human character, and a "player" tag to identify well, that, a player.

You could have some objects with both the "human" and "player" tags to define them as "human players".

## Methods

#### .getTags

```typescript
getTags(): string[];
```

Returns all the registered tags.

#### .getWithAll

```typescript
getWithAll(...tags: string[]): THREE.Object3D[];
```

Returns a list of objects which have all of the given tags.

#### .getWithAny

```typescript
getWithAny(...tags: string[]): THREE.Object3D[];
```

Returns a list of objects which have any of the given tags.

#### .hasAny

```typescript
hasAny(object: THREE.Object3D, ...tags: string[]): boolean;
```

Checks if an object has any of the given tags.

#### .hasAll

```typescript
hasAll(object: THREE.Object3D, ...tags: string[]): boolean;
```

Checks if an object has all of the given tags.

#### .hasNone

```typescript
hasNone(object: THREE.Object3D, ...tags: string[]): boolean;
```

Checks if an object has none of the given tags.

#### .isMissingAll

```typescript
isMissingAll(object: THREE.Object3D, ...tags: string[]): boolean;
```

Checks if an object is missing all of the given tags.

#### .get

```typescript
get(object: THREE.Object3D): string[];
```

Returns all tags of a given object.

#### .set

```typescript
set(object: THREE.Object3D, ...tags: string[]): void;
```

Sets all the given tags to an object. If a tag does not exist yet, it'll be created and registered.

#### .remove

```typescript
remove(object: THREE.Object3D, ...tags: string[]): void;
```

Removes the given tags from an object.

#### .create

```typescript
create(...tags: string[]): void;
```

Creates the given tags. If a tag is already present it will be omitted.