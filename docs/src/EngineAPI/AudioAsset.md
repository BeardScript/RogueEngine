### AudioAsset

This class provides the necessary information to load a **.rogueAudio** file. An instance of this class aids us in creating either an [Audio](https://threejs.org/docs/#api/en/audio/Audio) or [PositionalAudio](https://threejs.org/docs/#api/en/audio/PositionalAudio) object.

## Properties

#### .uuid

```typescript
readonly uuid: string;
```

The unique identifier of this asset.

#### .path

```typescript
readonly path: string;
```

The current path to the related **.rogueAudio** file.

#### .name

```typescript
readonly name: string;
```

The name of the asset.

## Methods

#### .getAudio

```typescript
getAudio(): Audio;
```

This method creates an Audio object with the buffer information in the same instance of AudioAsset.

#### .getPositionalAudio

```typescript
getPositionalAudio(): PositionalAudio;
```

This method creates a PositionalAudio object with the buffer information in the same instance of AudioAsset.

#### AudioAsset.fromFile

```typescript
static fromFile(filePath: string): Promise<AudioAsset>;
```

This static method of AudioAsset takes the path of a **.rogueAudio** file and returns an instance of AudioAsset. You should use this method, instead of instantiating the class manually.