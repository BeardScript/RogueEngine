### Tags

This class is is in charge of managing tags. Tags are a simple way to classify objects in our project.

For instance, you could have a "human" tag, to identify a human character, and a "player" tag to identify well, that, a player.

You could have some objects with both the "human" and "player" tags to define them as "human players".

All of its members are **static**, so you access them directly through the class, like `Tags.set(object, "player")`.

## Methods

#### .getTags

```typescript
getTags(): string[];
```

Returns all the registered tags.

#### .getObjects

```typescript
getObjects(tag: string): THREE.Object3D[];
```

Returns all objects with the given tag.

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

Checks if an object is missing at least one of the given tags. In other words, it returns `true` when the object doesn't have all of the given tags.

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

#### .delete

```typescript
delete(...tags: string[]): void;
```

Deletes the given tags entirely and removes them from every object that has them.

#### .removeObjectMapping

```typescript
removeObjectMapping(object: THREE.Object3D): void;
```

Removes an object from all tag maps. The object's tags are cleaned up from the registry without deleting the tags themselves.

#### .clearMaps

```typescript
clearMaps(): void;
```

Empties every tag's object list while keeping the tag names registered. Handy to wipe the scene's tags before unloading it.

#### .clear

```typescript
clear(): void;
```

Removes all tags and all object mappings. This clears the tag system completely.