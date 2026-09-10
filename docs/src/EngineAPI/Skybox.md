### Skybox

The **Skybox** is a singleton that controls the sky of the current scene. It supports a procedural sky (the default) and cubemap skies, and you access it through the exported `Skybox` object, like `RE.Skybox`.

The editor's [Skybox Window](/Workflow/EditorLayout#skybox-window) is basically a friendly frontend for this API, and every scene stores its own skybox setup. So in most projects you'll set the skybox from the editor and never touch this from code. This API is there for when you want to change the sky at runtime.

### Properties

#### .enabled

```typescript
enabled: boolean;
```

Enables or disables the skybox.

#### .mode

```typescript
mode: 'procedural' | 'cubemap' | '360';
```

Sets the skybox mode. Right now `"procedural"` and `"cubemap"` are implemented. The `"360"` value is reserved for a future feature, so stick to the first two for now.

```typescript
import * as RE from 'rogue-engine';
...
RE.Skybox.mode = 'cubemap';
```

#### .sunSpeed

```typescript
sunSpeed: number;
```

The speed at which the sun moves in procedural mode, which is what drives a day and night cycle. Set it to `0` (the default) to keep the sun still.

#### .inclination

```typescript
inclination: number;
```

The sun inclination for the procedural sky. Updating it moves the sun, and in runtime it also feeds the day and night cycle when [sunSpeed](#sunspeed) is set.

#### .azimuth

```typescript
azimuth: number;
```

The sun azimuth for the procedural sky.

#### .turbidity

```typescript
turbidity: number;
```

The turbidity of the procedural sky, that is, how hazy the atmosphere looks.

#### .rayleigh

```typescript
rayleigh: number;
```

The Rayleigh scattering of the procedural sky, which affects how the light scatters in the atmosphere.

#### .mieCoefficient

```typescript
mieCoefficient: number;
```

The Mie coefficient of the procedural sky, which affects how light scatters around the sun.

#### .mieDirectionalG

```typescript
mieDirectionalG: number;
```

The directional Mie scattering of the procedural sky, which controls the size and falloff of the glow around the sun.

#### .luminance

```typescript
luminance: number;
```

The overall luminance of the procedural sky.

#### .showSunDisc

```typescript
showSunDisc: boolean;
```

Whether the procedural sky shows the sun disc.

#### .cloudScale, .cloudSpeed, .cloudCoverage, .cloudDensity, .cloudElevation

```typescript
cloudScale: number;
cloudSpeed: number;
cloudCoverage: number;
cloudDensity: number;
cloudElevation: number;
```

The procedural sky cloud settings. They control the size of the clouds, how fast they drift, how much of the sky they cover, how dense they are and how high up they sit. Notice that **cloudSpeed** also drives the cloud animation over time when it's not `0`.

#### .layers

```typescript
layers: number;
```

The layer mask applied to the sky objects.

#### .cubemapTop, .cubemapBottom, .cubemapFront, .cubemapBack, .cubemapRight, .cubemapLeft

```typescript
cubemapTop: THREE.Texture;
cubemapBottom: THREE.Texture;
cubemapFront: THREE.Texture;
cubemapBack: THREE.Texture;
cubemapRight: THREE.Texture;
cubemapLeft: THREE.Texture;
```

The six face textures of a cubemap sky. Setting any of them while in `"cubemap"` mode will rebuild the skybox with the new face.

#### .cubemapColorSpace, .cubemapMagFilter, .cubemapMinFilter, .cubemapMapping, .cubemapWrapS, .cubemapWrapT, .cubemapFlipY, .cubemapPremultiplyAlpha

```typescript
cubemapColorSpace: string;
cubemapMagFilter: THREE.MagnificationTextureFilter;
cubemapMinFilter: THREE.MinificationTextureFilter;
cubemapMapping: THREE.CubeTextureMapping;
cubemapWrapS: THREE.Wrapping;
cubemapWrapT: THREE.Wrapping;
cubemapFlipY: boolean;
cubemapPremultiplyAlpha: boolean;
```

These give you full control over how the cubemap texture is sampled and interpreted. They map directly to the equivalent three.js [CubeTexture](https://threejs.org/docs/#api/en/textures/CubeTexture) properties.

#### .sky

```typescript
readonly sky: THREE.Object3D;
```

The procedural sky mesh, when in procedural mode.

#### .cubemapSky

```typescript
readonly cubemapSky: THREE.Object3D;
```

The cubemap sky mesh, when in cubemap mode.

### Methods

#### .init

```typescript
init(json?: any): void
```

(Re)builds the skybox, optionally from a previously serialized state. The engine calls this for you when a scene is loaded.

#### .toJSON

```typescript
toJSON(): any
```

Serializes the current skybox state, including the cubemap face textures, so it can be stored in a scene file.

#### .fromJSON

```typescript
fromJSON(json: any): void
```

Restores the skybox from a serialized state, loading the referenced texture assets as needed.
